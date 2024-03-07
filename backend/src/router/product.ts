import express from 'express'
import { createProduct, deleteById, getAllProduct, getProduct, updateById } from '../controller'
createProduct

const product = express.Router()


product.route("/product").post(createProduct).get(getAllProduct);
product.route("/:id").delete(deleteById).put(updateById).get(getProduct);



export { product }