import { datajs } from "../../../data";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json(datajs);
};
export default handler;
