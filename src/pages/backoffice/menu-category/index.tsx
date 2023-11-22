import BackOfficeLayout from "@/components/backOfficeLayout";
import ItemCard from "@/components/itemCard/ItemCard";
import CreateMenuCategory from "@/components/menuCategory/CreateMenuCategory";
import { useAppSelector } from "@/store/hooks";
import { Category } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const MenuCategory = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menuCategories =
    useAppSelector((store) => store.menuCategory.items) || [];

  return (
    <BackOfficeLayout>
      <Box sx={{ mr: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Create menu category
          </Button>
        </Box>
        {/* pass setOpen function as a prop */}
        <CreateMenuCategory open={open} setOpen={setOpen} />
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
