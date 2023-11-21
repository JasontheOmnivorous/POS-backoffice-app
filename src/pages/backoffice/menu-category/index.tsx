import BackOfficeLayout from "@/components/backOfficeLayout";
import ItemCard from "@/components/itemCard/ItemCard";
import CreateMenuCategory from "@/components/menuCategory/CreateMenuCategory";
import config from "@/config";
import { MenuCategoryType } from "@/types/menuCategory";
import { Category } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const MenuCategory = () => {
  const [menuCategories, setMenuCategories] = useState<MenuCategoryType[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  console.log("Backend menucat: ", menuCategories);

  useEffect(() => {
    fetchMenuCategories();
  }, []);

  const fetchMenuCategories = async () => {
    const response = await fetch(`${config.apiBaseUrl}/menu-category`);
    const data = await response.json();
    setMenuCategories(data.data);
  };

  return (
    <BackOfficeLayout>
      <Box sx={{ mr: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Create menu category
          </Button>
        </Box>
        {/* pass setOpen function as a prop */}
        <CreateMenuCategory
          open={open}
          setOpen={setOpen}
          setMenuCategories={setMenuCategories}
        />
        {/* show responded menus */}
        <Box sx={{ display: "flex", flexWrap: "wrap", margin: 5 }}>
          {menuCategories?.map((menuCategory) => (
            <ItemCard
              href={`menu-category/${menuCategory.id}`}
              key={menuCategory.id}
              title={menuCategory.name}
              subtitle="5 menus"
              icon={<Category sx={{ fontSize: 50 }} />}
            />
          ))}
        </Box>
      </Box>
    </BackOfficeLayout>
  );
};

export default MenuCategory;
