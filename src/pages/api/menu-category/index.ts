import { MenuCategoryType } from "@/types/menuCategory";
import { NextApiRequest, NextApiResponse } from "next";

const menuCategories: MenuCategoryType[] = [];

const handlePost = (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body.name)
    return res
      .status(400)
      .json({ status: "fail", message: "Please provide category name." });

  const validData = { name: req.body.name, isAvailable: req.body.isAvailable };
  const id =
    menuCategories.length > 0
      ? menuCategories[menuCategories.length - 1].id + 1
      : 1;

  menuCategories.push({
    id,
    ...validData,
    isArchived: false,
  });
  console.log("Inside POST", menuCategories);
  return res.status(201).send(menuCategories);
};

const handleGet = (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Inside GET", menuCategories);
  return res.status(200).send(menuCategories);
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGet(req, res);
  } else if (req.method === "POST") {
    handlePost(req, res);
  }

  // 405 means invalid req method
  return res.status(405).json({
    status: "fail",
    message: "Invalid method.",
  });
}
