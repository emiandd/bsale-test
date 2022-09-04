const db = require('../../db.js');

/**
 * It queries the database for products that match the name parameter
 * @param res - The response object
 * @param name - The name of the product to search for.
 */
const getProductsByName = async (res, name) => {

	try {
		const q = `SELECT * FROM product WHERE name LIKE '%${name}%'`;
		await db.query( q, (err, result, fields) => {
			if(result.length === 0) return res.status(404).send({error:"No se encontraron productos con ese nombre"})
			else res.send(result);
		})
		// db.end();
	} catch(e) {
		return res.status(404).json({error:e})
	}

}

module.exports = getProductsByName;