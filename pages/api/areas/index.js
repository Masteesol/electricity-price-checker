import { areas } from "../../../data/areas";

export default function handler(req, res) {
  res.status(200).json(areas);
}
