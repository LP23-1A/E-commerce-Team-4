import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email"],
  },
  name: String,
  password: String,
  shopInformation: String,
  city: String,
  district: String,
  khoroo: String,
  exprience: String,
  product: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});
const UserModel = mongoose.model("user", UserSchema);
export { UserModel };
