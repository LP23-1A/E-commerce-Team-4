import { Request, Response } from "express";
import { OrderModel } from "../model/order";
type OrderType = {
  orderNumber: String;
  userId: string;
  phoneNumber: String;
  amountPaid: Number;
  amountToBePaid: Number;
  coupon: String;
  description: String;
  details: [];
  status: String;
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const {
      orderNumber,
      phoneNumber,
      userId,
      amountPaid,
      amountToBePaid,
      coupon,
      description,
      details,
    }: Required<OrderType> = req.body;
    const create = await OrderModel.create({
      orderNumber: orderNumber,
      phoneNumber: phoneNumber,
      userId: userId,
      amountPaid: amountPaid,
      amountToBePaid: amountToBePaid,
      coupon: coupon,
      description: description,
      details: details,
    });
    res.status(201).send({ success: true, create });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const getOneOrder = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    const getOneOrder = await OrderModel.findOne({ _id: _id })
      .populate("userId")
      .populate("details");
    res.status(200).send({ success: true, getOneOrder });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const getAllOrder = await OrderModel.find()
      .populate("userId")
      .populate("details");
    res.status(200).send({ success: true, getAllOrder });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const updateOrder = async (req: Request, res: Response) => {
  try {
    const updateById = req.params.id;
    const {
      orderNumber,
      phoneNumber,
      amountPaid,
      amountToBePaid,
      coupon,
      description,
      status,
    }: Required<OrderType> = req.body;
    const getAllOrder = await OrderModel.findByIdAndUpdate(updateById, {
      orderNumber: orderNumber,
      phoneNumber: phoneNumber,
      amountPaid: amountPaid,
      amountToBePaid: amountToBePaid,
      coupon: coupon,
      description: description,
      status: status,
    });
    res.status(201).send({ success: true, getAllOrder });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const deleteOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteOrder = await OrderModel.findByIdAndDelete(id);
    res.status(200).send({ success: true, deleteOrder });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};
export { createOrder, getOneOrder, getAllOrder, updateOrder, deleteOrder };
