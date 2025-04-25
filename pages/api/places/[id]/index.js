import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "Get") {
    const place = await Place.findById(id);
    if (!place) {
      response.status(404).json({ status: "Not found" });
      return;
    }
    return response.status(200).json(place);
  }

  response.status(405).json({ status: "Not allowed" });
}
