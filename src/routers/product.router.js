import Product from '../models/product.model.js';
import express from 'express';

const router = express.Router();

router.get('/tat-ca-san-pham', async function (request, response) {
	// request: là những gì người dùng gửi dữ liệu lên
	// response: là những gì server trả về cho người dùng
	const products = await Product.find();
	return response.status(200).json(products);
});

router.get('/san-pham/:productId', async function (request, response) {
	const { productId } = request.params;
	const result = await Product.findById(productId);
	return response.status(200).json(result);
});

export default router;
