import { Request, Response } from "express";
import { ProductModel } from "../model/product";


// const AWS = require('aws-sdk');
// const fs = require('fs');
// const s3 = new AWS.S3();

// AWS.config.update({
//     region: 'ap-southeast-1',
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// });

// // const params = {
// //     Bucket: 'ecommerceteam4pinecone',
// //     Key: 'Character.svg',
// //     Body: fs.createReadStream('/Users/23LP5567/documents/E-commerce-team-4/frontend/public/Character.svg')
// // };

// s3.upload(params, (err: Error, data: String) => {
//     if (err) {
//         console.log('Error uploading file:', err);
//     } else {
//         console.log('File uploaded successfully.');
//     }
// });

type ProductType = {
  productName: String;
  categoryId: String;
  price: Number;
  qty: Number;
  thumbnails: String;
  images: String;
  coupon: String;
  salePercent: Number;
  description: String;
  viewsCount: Number;
  tag: String;
  residual: Number;
  sold: Number;
  mainCate: String;
  subCate: String;
  createdAt: Date;
  updatedAt: Date;
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      productName,
      categoryId,
      price,
      qty,
      thumbnails,
      images,
      coupon,
      salePercent,
      description,
      viewsCount,
      tag,
      residual,
      sold,
      mainCate,
      subCate,
    }: Required<ProductType> = req.body;
    const Product = await ProductModel.create({
      productName: productName,
      categoryId: categoryId,
      price: price,
      qty: qty,
      thumbnails: thumbnails,
      images: images,
      coupon: coupon,
      salePercent: salePercent,
      description: description,
      viewsCount: viewsCount,
      tag: tag,
      residual: residual,
      sold: sold,
      mainCate: mainCate,
      subCate: subCate,
    });
    res.status(201).send({ success: true, Product });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
    try {
        const getAll = await ProductModel.find()
        res.status(200).send({ success: true, getAll })
    } catch (error) {
        res.status(500).send({ success: false, error })
    }
}

const getProduct = async (req: Request, res: Response) => {
  try {
    const getId = req.params.id;
    const Response = await ProductModel.findOne({ _id: getId });
    res.status(200).send({ success: true, Response });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const deleteById = async (req: Request, res: Response) => {
  try {
    const deleteId = req.params.id;
    const Response = await ProductModel.findByIdAndDelete(deleteId);
    res.status(200).send({ success: true, Response });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const updateById = async (req: Request, res: Response) => {
  try {
    const updateProduct = req.params.id;
    const {
      productName,
      categoryId,
      price,
      qty,
      thumbnails,
      images,
      coupon,
      salePercent,
      description,
      viewsCount,
      tag,
      residual,
      sold,
      mainCate,
      subCate,
    } = req.body;
    const Response = await ProductModel.findByIdAndUpdate(updateProduct, {
      productName,
      categoryId,
      price,
      qty,
      thumbnails,
      images,
      coupon,
      salePercent,
      description,
      viewsCount,
      tag,
      residual,
      sold,
      mainCate,
      subCate,
    });
    res.status(200).send({ success: true, Response });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

export { createProduct, getAllProduct, deleteById, updateById, getProduct };
