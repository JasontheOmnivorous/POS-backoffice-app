import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

const handleDelete = async (req: NextApiRequest, res: NextApiResponse) => {
  // update isArchived to true
  const deletedUser = await prisma.user.update({
    where: { id: Number(req.query.id) }, // where to update
    data: { isArchived: true }, // what to update
  });

  return res.status(201).send(deletedUser);
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PUT") {
    handleDelete(req, res);
  }
};

export default handler;
