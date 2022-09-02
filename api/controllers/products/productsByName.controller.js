const db = require('../../db.js');

const getProductsByName = async (res, name) => {

	try {
		const q = `SELECT * FROM product WHERE name LIKE '%${name}%'`;
		await db.query( q, (err, result, fields) => {
			if(result.length === 0) return res.status(404).send("No se encontraron productos con ese nombre")
			else return res.send(result);
		})
	} catch(e) {
		console.log({error: e});
	}

}

module.exports = getProductsByName;