import Product from './models/product.model.js';
import express from 'express';
import mongoose from 'mongoose';
import routerProduct from './routers/product.router.js';

const app = express();
app.use(express.json());
// get, post, put, delete, patch
// nosql: mongodb
// get: lấy dữ liệu
// post: tạo mới dữ liệu
// put: cập nhật dữ liệu
// patch: cập nhật dữ liệu
// { => method: patch
//   "username": "admin update",
// }
// delete: xóa dữ liệu

app.post('/ahihi', async (req, res) => {
	const data = {
		nameProduct: 'name 1',
		price: 1000,
		imageProduct: 'acbabc',
	};
	const resutl = await Product.create(data);
	return res.json(resutl);
});

/* connect mongoose */
// c1: async - await + try catch
// async function main() {
// 	try {
// 		await mongoose.connect('mongodb://127.0.0.1:27017/marathon-node', {
// 			useNewUrlParser: true, // đọc dữ liệu từ db
// 		});
// 		console.log('connect success');
// 	} catch (error) {
// 		console.log('connect fail');
// 	}
// }
// main();
// c2: then/catch
mongoose
	// .connect('mongodb://127.0.0.1:27017/demo2')
	// .connect('mongodb://127.0.0.1:27017/marathon-node-be-demo')
	.connect(
		'mongodb+srv://hungdang02042003:tReZxHuWnYtxnAs5@cluster0.g2nfbra.mongodb.net/'
	)
	.then(() => {
		console.log('connect success');
	})
	.catch(() => {
		console.log('connect fail');
	});

// mk: hungdang02042003- tReZxHuWnYtxnAs5

// sql => table
// nosql => collection

// * tạo ra sản phẩm
const createProduct = async (request, response) => {
	try {
		const body = request.body;
		const result = await Product.create(body);
		return response.json(result);
	} catch (error) {
		return response.json({
			error: 'lỗi rồi',
		});
	}
};

// router
app.use('/api', routerProduct);

app.listen(4000, function () {
	console.log('App listening on port 4000!');
});

// port be: 3000 -> mongodb online
