import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  href?: string;
  subtitle?: string;
}

const ItemCard = ({ icon, title, href, subtitle }: Props) => {
  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none", color: "#000000" }}>
        <Paper
          elevation={2}
          sx={{
            width: 170,
            height: 170,
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            m: 2,
          }}
        >
          {icon}
          <Typography sx={{ color: "#4C4C6D", fontWeight: "700" }}>
            {title}
          </Typography>
          <Typography sx={{ color: "#4C4C6D", fontWeight: "700" }}>
            {subtitle && <Typography>{subtitle}</Typography>}
          </Typography>
        </Paper>
      </Link>
    );
  }

  return (
    <Paper
      sx={{
        width: 170,
        height: 170,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
      elevation={3}
    >
      {icon}
      <Typography sx={{ p: 2 }}>{title}</Typography>
      {subtitle && <Typography sx={{ p: 2 }}>{subtitle}</Typography>}
    </Paper>
  );
};

export default ItemCard;
