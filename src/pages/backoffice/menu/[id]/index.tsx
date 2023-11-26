import BackOfficeLayout from "@/components/backOfficeLayout";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateMenu } from "@/store/slices/menu";
import { UpdateMenuPayload } from "@/types/menu";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const UpdateMenu = () => {
  const id = useRouter().query.id; // get id from the search query
  const [updatedMenu, setUpdatedMenu] = useState<UpdateMenuPayload>({
    id: Number(id),
    name: "",
    price: 0,
  });
  const menus = useAppSelector((store) => store.menu.items); // get menus from the store
  const menu = menus.find((item) => item.id === Number(id)); // find matching menu with queried id
  const dispatch = useAppDispatch();
  if (!menu) return null; // if the data we want doesnt exist or hasnt been fetched, dont render anything

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
          sx={{ m: 2 }}
          onChange={(evt) =>
            setUpdatedMenu({ ...updatedMenu, name: evt.target.value })
          }
          variant="outlined"
          label="name"
          defaultValue={menu?.name}
        />
        <TextField
          sx={{ m: 2 }}
          onChange={(evt) =>
            setUpdatedMenu({ ...updatedMenu, price: Number(evt.target.value) })
          }
          variant="outlined"
          label="price"
          defaultValue={menu?.price}
        />
        <Button
          onClick={() => dispatch(updateMenu(updatedMenu))}
          sx={{ mt: 2 }}
          variant="contained"
        >
          update
        </Button>
      </Box>
    </BackOfficeLayout>
  );
};

export default UpdateMenu;
