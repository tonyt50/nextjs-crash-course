import { datajs } from "../../../data";
import { NextApiRequest, NextApiResponse } from "next";

const handler = ({ query: { id } }: NextApiRequest, res: NextApiResponse) => {
  const filtered = datajs.filter((datajselement) => datajselement.id === id);

  if (filtered.length > 0) {
    return res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `message with id of ${id} not found` });
  }
};
export default handler;
