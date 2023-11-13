import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import { Menu } from "../../types/menu";

interface Props {
  menu: Menu;
}

const MenuCard = ({ menu }: Props) => {
  return (
    <Link href={String(menu.id)} style={{ textDecoration: "none" }}>
      <Card
        sx={{ width: 150, height: 150, borderRadius: 10, boxShadow: 2, m: 1 }}
        variant="outlined"
      >
        <CardMedia sx={{ height: 80 }} image={menu.assetUrl} />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>{menu.name}</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MonetizationOnIcon sx={{ color: "green" }} />
            <Typography sx={{ display: "inline" }}>{menu.price}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MenuCard;
