import BackOfficeLayout from "@/components/backOfficeLayout";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateMenuCategory } from "@/store/slices/menuCategory";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const UpdateMenuCategory = () => {
  const [updateName, setUpdateName] = useState<string>("");
  const menuCategories = useAppSelector((store) => store.menuCategory.items);
  const id = useRouter().query.id;
  const menuCategory = menuCategories.find(
    (menuCategory) => menuCategory.id === Number(id)
  );
  const dispatch = useAppDispatch();
  if (!menuCategory) return null;

  return (
    <BackOfficeLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          variant="outlined"
          label="name"
          defaultValue={menuCategory?.name}
          onChange={(evt) => setUpdateName(evt.target.value)}
        />
        <Button
          onClick={() =>
            dispatch(updateMenuCategory({ id: Number(id), name: updateName }))
          }
          sx={{ mt: 2 }}
          variant="contained"
        >
          update
        </Button>
      </Box>
    </BackOfficeLayout>
  );
};

export default UpdateMenuCategory;
