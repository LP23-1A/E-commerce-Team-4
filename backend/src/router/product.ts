import express from 'express'
import { createProduct, deleteById, getAllProduct, updateById } from '../controller'
createProduct

const product = express.Router()

product.route("/").post(createProduct).get(getAllProduct);
product.route("/:id").delete(deleteById).put(updateById);



export { product }