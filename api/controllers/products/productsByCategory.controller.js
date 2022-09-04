const db = require('../../db.js');

/**
 * It queries the database for products that match the category passed as a parameter
 * @param res - the response object
 * @param category - The category of the product you want to get.
 */
const getProductsByCategory = async (res, category) => {

	try {
		const q = `SELECT * FROM product WHERE category = ${category}`;
		await db.query( q, (err, result, fields) => {
			if(result.length === 0) return res.status(404).send('La categoría ingresada no existe');
			else res.send(result);	
		})
		// db.end();
	} catch(e) {
		console.log({error:e});
	}

}

module.exports = getProductsByCategory;