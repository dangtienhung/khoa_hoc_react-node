import mongoose from 'mongoose';

// nvarchar/ varchar => string
// int => number
// datetime => Date
// bit => boolean

// chữ => string
// số => number
// ngày tháng => Date

const productSchema = new mongoose.Schema({
	nameProduct: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	imageProduct: {
		type: String,
		required: true,
	},
});

const Product = mongoose.model('Product', productSchema);
export default Product;
