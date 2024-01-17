import Joi from 'joi';
import Product from '../models/product.model.js';
import express from 'express';

const router = express.Router();
// nameProduct = ''
const schema = Joi.object({
	nameProduct: Joi.string().required().messages({
		'string.base': 'Tên sản phẩm phải là kiểu chuỗi',
		'string.empty': 'Tên sản phẩm không được để trống',
		'any.required': 'Tên sản phẩm là bắt buộc',
	}),
	price: Joi.number().required().messages({
		'number.base': 'Giá sản phẩm phải là kiểu số',
		'number.empty': 'Giá sản phẩm không được để trống',
		'any.required': 'Giá sản phẩm là bắt buộc',
	}),
	imageProduct: Joi.string().required().messages({
		'string.base': 'Hình sản phẩm phải là kiểu chuỗi',
		'string.empty': 'Hình sản phẩm không được để trống',
		'any.required': 'Hình sản phẩm là bắt buộc',
	}),
});

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

router.post('/create-product', async function (request, response) {
	const data = request.body;

	const { error } = schema.validate(data, { abortEarly: false });
	if (error) {
		// [1, 2, 3]
		return response
			.status(400)
			.json(error.details.map((item) => ({ message: item.message })));
	}

	// const result = await Product.create(data);
	// console.log('🚀 ~ result:', result);
});

export default router;
