import mongoose from "mongoose";

const { Schema } = mongoose;

const placesSchema = new Schema({
  //   places: {
  name: String,
  location: String,
  image: String,
  mapURL: String,
  description: String,
  //   },
});

const Places = mongoose.models.Places || mongoose.model("Places", placesSchema);

export default Places;
