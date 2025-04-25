
//el back end de POST


import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Places.findById(id);

    if (!place) {
      response.status(404).json({ status: "Not Found" });
      return;
    }
    response.status(200).json(place);
    return;
  }


  response.status(200).json(place);

  if (request.method === "POST") {
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
