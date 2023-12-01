import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await prisma.user.findMany({ where: { isArchived: false } }); // query all the users that are not archived from the DB
  return res.status(200).send(users);
};

const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body.name || !req.body.email)
    return res.status(400).send("Name or Email is missing.");

  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
    },
  });

  return res.status(201).send(user);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    getHandler(req, res);
  } else if (req.method === "POST") {
    postHandler(req, res);
  } else {
    return res.status(405).send("This method is not defined.");
  }
};

export default handler;
