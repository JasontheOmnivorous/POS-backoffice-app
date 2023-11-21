import { Menu } from "@/types/menu";
import { NextApiRequest, NextApiResponse } from "next";

const menus: Menu[] = [];

const postHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body.name || !req.body.price)
    return res
      .status(400)
      .json({ status: "fail", message: "Required name and price." });

  const validData = {
    name: req.body.name,
    price: req.body.price,
    assetUrl: req.body.assetUrl,
  };

  const id = menus.length > 0 ? menus[menus.length - 1].id + 1 : 1;
  menus.push({ id, ...validData, isArchived: false });
  res.status(201).json({
    status: "success",
    data: menus,
  });
};

const getHandler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log("GET menus: ", menus);
  res.status(200).json({
    status: "success",
    data: menus,
  });
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    postHandler(req, res);
  } else if (req.method === "GET") {
    getHandler(req, res);
  }

  return res.status(405).json({
    status: "fail",
    message: "Invalid method.",
  });
}
