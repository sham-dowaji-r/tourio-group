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
  } else if (request.method === "POST") {
    // creo el lugar usando los datos enviados en el cuerpo de la solicitud
    const placeData = request.body;

    try {
      //se crea un lnuevo lugar
      await place.create(placeData);

      response.status(201).json({ status: "Place created.", place: placeData });
    } catch (error) {
      response.status(500).json({ status: "Error creating place." });
    }
    return;
  }
  response.status(405).json({ status: "Method Not Allowed" });
}
