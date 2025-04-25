//el back end de POST
import { places } from "../../../../lib/db.js";

export default async function handler(request, response) {
  const { id } = request.query;

  const place = places.find((place) => place.id === id); //aca Busco el lugar con ese id enplaces. si esta lo asigno a la variable place.

  if (!place) {
    response.status(404).json({ status: "Not found" });
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
