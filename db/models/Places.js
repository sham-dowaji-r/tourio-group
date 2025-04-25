import mongoose from "mongoose";

const placesSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String,
  mapURL: String,
  description: String,
});

const Places = mongoose.models.Places || mongoose.model("Places", placesSchema);

export default Places;
