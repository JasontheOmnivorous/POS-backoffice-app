import { Box } from "@mui/material";
import { useRouter } from "next/router";

const UpdateMenuCategory = () => {
  const router = useRouter();
  return <Box>Menu Category id to update: {router.query.id}</Box>;
};

export default UpdateMenuCategory;
