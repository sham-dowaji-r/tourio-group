// import { places } from "../../../../lib/db.js";
import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const { id } = req.query;
      const place = await Places.findById(id);
      res.status(200).json(place);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch a place" });
    }
  } else if (req.method === "PUT") {
    try {
      const { id } = req.query;
      const place = await Places.findByIdAndUpdate(id, req.body);
      res.status(200).json(place);
    } catch (error) {
      res.status(500).json({ error: "Failed to update a place" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
