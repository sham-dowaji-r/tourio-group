import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const places = await Places.find();
      res.status(200).json(places);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch places" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
