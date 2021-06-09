import express from 'express';
import faker from 'faker';

faker.locale = 'es';
const router = express.Router();

function generarProductos(cant = 10) {
	const productos = [];
	for (let i = 1; i <= cant; i++) {
		productos.push({
			nombre: faker.commerce.productName(),
			precio: faker.commerce.price(),
			foto: faker.datatype.number({ min: 0, max: 300 }),
		});
	}
	return productos;
}

export default router.get('/', async (req, res, next) => {
	try {
		const pop = await generarProductos(req.query.cant);
		res.json(pop);
	} catch (err) {
		next(err);
	}
});