const db = require('../../db.js');

const getProductsByCategory = async (res, category) => {

	try {
		const q = `SELECT * FROM product WHERE category = ${category}`;
		await db.query( q, (err, result, fields) => {
			if(result.length === 0) return res.status(404).send('La categoría ingresada no existe');
			else return res.send(result);	
		})
	} catch(e) {
		console.log({error:e});
	}

}

module.exports = getProductsByCategory;