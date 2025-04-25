import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const places = await Places.find();
      res.status(200).json(places);
      return;
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch places" });
      return;
    }
  } else if (req.method === "POST") {
    const placeData = req.body;

    try {
      await Places.create(placeData);
      res.status(201).json({ status: "Place created.", place: placeData });
      return;
    } catch (error) {
      res.status(500).json({ status: "Error creating place." });
      return;
    }
  }

  res.status(405).json({ status: "Method Not Allowed" });
}
