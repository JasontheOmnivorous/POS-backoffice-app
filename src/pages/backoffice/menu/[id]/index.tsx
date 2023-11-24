import BackOfficeLayout from "@/components/backOfficeLayout";
import { useAppSelector } from "@/store/hooks";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";

const UpdateMenu = () => {
  const menus = useAppSelector((store) => store.menu.items); // get menus from the store
  const id = useRouter().query.id; // get id from the search query
  const menu = menus.find((item) => item.id === Number(id)); // find matching menu with queried id
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
        <TextField variant="outlined" label="name" defaultValue={menu?.name} />
        <Button sx={{ mt: 2 }} variant="contained">
          update
        </Button>
      </Box>
    </BackOfficeLayout>
  );
};

export default UpdateMenu;
