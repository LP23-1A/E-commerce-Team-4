import { Request, Response } from "express";
import { OrderModel } from "../model/order";
type OrderType = {
  orderNumber: String;
  phoneNumber: String;
  amountPaid: Number;
  amountToBePaid: Number;
  coupon: String;
  description: String;
  orderDetail: [];
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const {
      orderNumber,
      phoneNumber,
      amountPaid,
      amountToBePaid,
      coupon,
      description,
      orderDetail,
    }: Required<OrderType> = req.body;
    const create = await OrderModel.create({
      orderNumber: orderNumber,
      phoneNumber: phoneNumber,
      amountPaid: amountPaid,
      amountToBePaid: amountToBePaid,
      coupon: coupon,
      description: description,
      orderDetail: orderDetail,
    });
    res.status(201).send({ success: true, create });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const getOneOrder = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    const getOneOrder = await OrderModel.findOne({ id: _id });
    res.status(200).send({ success: true, getOneOrder });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const getAllOrder = await OrderModel.find();
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
    }: Required<OrderType> = req.body;
    const getAllOrder = await OrderModel.findByIdAndUpdate(updateById, {
      orderNumber: orderNumber,
      phoneNumber: phoneNumber,
      amountPaid: amountPaid,
      amountToBePaid: amountToBePaid,
      coupon: coupon,
      description: description,
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
