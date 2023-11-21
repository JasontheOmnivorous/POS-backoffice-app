import config from "@/config";
import {
  CreateMenuCategoryPayload,
  MenuCategoryType,
} from "@/types/menuCategory";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
  setMenuCategories: (val: MenuCategoryType[]) => void;
}

const CreateMenuCategory = ({ open, setOpen, setMenuCategories }: Props) => {
  const [newMenuCategory, setNewMenuCategory] =
    useState<CreateMenuCategoryPayload>({
      name: "",
      isAvailable: true, // default state to true
    });
  console.log("Frontend menucat: ", newMenuCategory);

  const handleCreateMenuCategory = async () => {
    const response = await fetch(`${config.apiBaseUrl}/menu-category`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newMenuCategory),
    });
    const data = await response.json();
    setMenuCategories(data.data);
    setOpen(false);
    setNewMenuCategory({ name: "", isAvailable: true }); // reset state after creating
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
              setNewMenuCategory({
                ...newMenuCategory,
                name: event.target.value,
              })
            }
          />
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                value={newMenuCategory.isAvailable}
                onChange={() =>
                  setNewMenuCategory({
                    ...newMenuCategory,
                    isAvailable: !newMenuCategory.isAvailable, // switch the state on change
                  })
                }
              />
            }
            label="available"
          />
          <Button
            variant="contained"
            sx={{ mt: 3, width: "fit-content" }}
            onClick={handleCreateMenuCategory}
          >
            Create
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateMenuCategory;
