import { useAppDispatch } from "@/store/hooks";
import { createMenu } from "@/store/slices/menu";
import { CreateMenuPayload } from "@/types/menu";
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
}

const CreateMenu = ({ open, setOpen }: Props) => {
  // menu created and sent from client side
  const [newMenu, setNewMenu] = useState<CreateMenuPayload>({
    name: "",
    price: 0,
    assetUrl: "",
  });
  const dispatch = useAppDispatch();

  const handleCreateMenu = async () => {
    // pass data as a payload to createMenu thunk (async action) to send this data to the server
    dispatch(createMenu(newMenu)); // put returned menus from the server as payload
    setOpen(false);
    setNewMenu({ name: "", price: 0, assetUrl: "" }); // clear the state after sending data to the backend
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
