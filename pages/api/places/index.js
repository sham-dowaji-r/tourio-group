import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.find();
    response.status(200).json(places);
    return;
  }
  res.status(405).json({ status: "Not allowed" });
}
