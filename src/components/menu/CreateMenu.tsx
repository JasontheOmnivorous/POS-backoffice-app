import config from "@/config";
import { CreateMenuPayload, Menu } from "@/types/menu";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  setMenus: (menus: Menu[]) => void;
}

const CreateMenu = ({ open, setOpen, setMenus }: Props) => {
  // menu created and sent from client side
  const [newMenu, setNewMenu] = useState<CreateMenuPayload>({
    name: "",
    price: 0,
    assetUrl: "",
  });
  console.log("Menu rendered");
  console.log("Create tab state: ", open);

  const handleCreateMenu = async () => {
    console.log("Changed state: ", newMenu); // visualize changed state
    const response = await fetch(`${config.apiBaseUrl}/menu`, {
      method: "POST", // config method to post
      // need to specify headers to inform what we're sending, otherwise, server won't understand the data
      // NOTE: headers are very important
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newMenu), // we can only send data as string datatype
    });
    const menus = await response.json();
    console.log("Data from server: ", menus);
    setMenus(menus.data); // change state with responded menus array
    setOpen(false);
    setNewMenu({ name: "", price: 0, assetUrl: "" }); // clear the state after sending data tot he backend
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      {/* use setOpen to change the state of open props to close it back */}
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "#4C4C6D",
          color: "#E8F6EF",
        }}
      >
        Create Menu
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 5,
          }}
        >
          <TextField
            placeholder="name"
            sx={{ width: 300 }}
            onChange={(event) =>
              setNewMenu({ ...newMenu, name: event.target.value })
            }
          />
          <TextField
            placeholder="price"
            sx={{ width: 300, mt: 3 }}
            onChange={(event) =>
              setNewMenu({ ...newMenu, price: Number(event.target.value) })
            }
          />
          <Button
            variant="contained"
            sx={{ mt: 3, width: "fit-content" }}
            onClick={handleCreateMenu}
          >
            Create
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateMenu;
