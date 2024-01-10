import Product from './models/product.model.js';
import express from 'express';
import mongoose from 'mongoose';

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

app.use('/ahihi', function (req, res) {
	console.log('first');
	console.log('first');
	res.send('Hello World');
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
	.connect('mongodb://127.0.0.1:27017/demo2', {
		useNewUrlParser: true, // đọc dữ liệu từ db
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('connect success');
	})
	.catch(() => {
		console.log('connect fail');
	});

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

app.post('/products', createProduct);

app.listen(3000, function () {
	console.log('App listening on port 3000!');
});
