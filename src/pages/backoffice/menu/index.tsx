import BackOfficeLayout from "@/components/backOfficeLayout";
import MenuCard from "@/components/menu/MenuCard";
import config from "@/config";
import { Menu } from "@/types/menu";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import CreateMenu from "../../../components/menu/CreateMenu";

const MenuPage = () => {
  // menus that server responded
  const [menus, setMenus] = useState<Menu[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  console.log("Render menu");
  console.log("Menus from server: ", menus);

  // control infinite loop with useEffect
  useEffect(() => {
    fetchMenu();
  }, []);

  // fetch data from server as soon as the page is loaded
  const fetchMenu = async () => {
    const response = await fetch(`${config.apiBaseUrl}/menu`);
    const data = await response.json();

    setMenus(data.data);
    console.log("data from server: ", menus);
  };

  return (
    <BackOfficeLayout>
      <Box sx={{ mr: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Create menu
          </Button>
        </Box>
        {/* pass setOpen function as a prop */}
        <CreateMenu open={open} setOpen={setOpen} setMenus={setMenus} />
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
