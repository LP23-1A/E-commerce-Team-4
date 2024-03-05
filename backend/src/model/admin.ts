import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email"],
  },
  name: String,
  shopInformation: String,
  city: String,
  district: String,
  khoroo: String,
  experience: String,
  product: String,
});
const AdminModel = mongoose.model("admin", AdminSchema);
export { AdminModel };
