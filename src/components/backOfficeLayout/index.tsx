import CategoryIcon from "@mui/icons-material/Category";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

// We usually put the components that we consistently use for most or every routes in layout folder and component
// Wrap necessary components with Layout
const BackOfficeLayout = ({ children }: Props) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 80,
          width: "100vw",
          bgcolor: "#4C4C6D",
        }}
      >
        <Typography sx={{ color: "#E8F6EF" }} variant="h4">
          Foodie POS - Backoffice
        </Typography>
      </Box>
      {/* Sidebar + Content */}
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <Box sx={{ width: 300, bgcolor: "#1B9C85", borderTopRightRadius: 20 }}>
          {/* Menu */}
          <Link style={{ textDecoration: "none" }} href={"/backoffice/menu"}>
            <ListItemButton>
              <ListItemIcon>
                <RestaurantMenuIcon sx={{ color: "#E8F6EF", fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: 20, color: "#E8F6EF" }}>
                    Menu
                  </Typography>
                }
              />
            </ListItemButton>
          </Link>
          {/* Menu Category */}
          <Link
            style={{ textDecoration: "none" }}
            href={"/backoffice/menuCategory"}
          >
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon sx={{ color: "#E8F6EF", fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: 20, color: "#E8F6EF" }}>
                    Menu Category
                  </Typography>
                }
              />
            </ListItemButton>
          </Link>
        </Box>
        {/* Content */}
        <Box sx={{ width: "100vw", pl: 3, pt: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default BackOfficeLayout;
