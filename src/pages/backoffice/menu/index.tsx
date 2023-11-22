import BackOfficeLayout from "@/components/backOfficeLayout";
import MenuCard from "@/components/menu/MenuCard";
import { useAppSelector } from "@/store/hooks";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import CreateMenu from "../../../components/menu/CreateMenu";

const MenuPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  // we need to use this guy instead of native rtk useSelector because this guy knows the type of the store
  const menus = useAppSelector((store) => store.menu.items) || []; // get menus from the store

  return (
    <BackOfficeLayout>
      <Box sx={{ mr: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Create menu
          </Button>
        </Box>
        {/* pass setOpen function as a prop */}
        <CreateMenu open={open} setOpen={setOpen} />
        {/* show responded menus */}
        <Box sx={{ display: "flex", flexWrap: "wrap", margin: 5 }}>
          {menus?.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </Box>
      </Box>
    </BackOfficeLayout>
  );
};

export default MenuPage;
