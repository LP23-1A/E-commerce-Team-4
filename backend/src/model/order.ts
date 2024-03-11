import mongoose from "mongoose";
type OrderStatus = "Ordered" | "PreperingToShip" | "Shiped" | "Delivered";
const OrderSchema = new mongoose.Schema({
  orderNumber: String,
  status: {
    type: ["Ordered", "PreperingToShip", "Shiped", "Delivered"],
    default: "Ordered",
  },
  phoneNumber: String,
  deliveryDate: {
    type: Date,
    default: () => Date.now(),
  },
  amountPaid: Number,
  amountToBePaid: Number,
  coupon: {
    type: String,
    default: 0,
  },
  description: String,
  details: [],
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});
const OrderModel = mongoose.model("order", OrderSchema);
export { OrderModel };
