import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const place = await Places.findById(id);
      res.status(200).json(place);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch a place" });
    }
  } else if (req.method === "PUT") {
    try {
      const place = await Places.findByIdAndUpdate(id, req.body);
      res.status(200).json(place);
    } catch (error) {
      res.status(500).json({ error: "Failed to update a place" });
    }
  } else if (req.method === "DELETE") {
    try {
      await Places.findByIdAndDelete(id);
      res.status(200).json({ message: "Place deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete the place" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
