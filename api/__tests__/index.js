const request = require('supertest');
const baseURL = 'http://localhost:3001';

describe('GET /products', () => {

	it('should return status code 200', async () => {
		const response = await request(baseURL).get('/products');
		expect(response.statusCode).toBe(200);
	})

	it("can't be empty array", async () => {
		const response = await request(baseURL).get('/products');
		expect(response.body).not.toHaveLength(0);
	})

})

describe('GET /categories', () => {

	it('should return status code 200', async () => {
		const response = await request(baseURL).get('/categories');
		expect(response.statusCode).toBe(200);
	})

	it("can't be empty array", async () => {
		const response = await request(baseURL).get('/categories');
		expect(response.body).not.toHaveLength(0);
	})

})

describe('GET /products/:category', () => {

	it('should return status code 200', async () => {
		const response = await request(baseURL).get(`/products/1`);
		expect(response.statusCode).toBe(200);
	})

	it('should return products from the "energetica" category', async () => {
		const response = await request(baseURL).get(`/products/1`);
		expect(response.body[0].category).toBe(1)

	})

	it('should return products from the "pisco" category', async () => {
		const response = await request(baseURL).get(`/products/2`);
		expect(response.body[0].category).toBe(2)
	})

	it('should return products from the "ron" category', async () => {
		const response = await request(baseURL).get(`/products/3`);
		expect(response.body[0].category).toBe(3)
	})

	it('should return products from the "bebida" category', async () => {
		const response = await request(baseURL).get(`/products/4`);
		expect(response.body[0].category).toBe(4)
	})

	it('should return products from the "snack" category', async () => {
		const response = await request(baseURL).get(`/products/5`);
		expect(response.body[0].category).toBe(5)
	})

	it('should return products from the "cerveza" category', async () => {
		const response = await request(baseURL).get(`/products/6`);
		expect(response.body[0].category).toBe(6)
	})

	it('should return products from the "vodka" category', async () => {
		const response = await request(baseURL).get(`/products/7`);
		expect(response.body[0].category).toBe(7)
	})

	it('should return status code 404 if the category not exists', async () => {
		const response = await request(baseURL).get(`/products/20`);
		expect(response.statusCode).toBe(404);
	})

	it('should return "La categoría ingresada no existe" if category does not exists', async () => {
		const response = await request(baseURL).get(`/products/20`);
		expect(response.text).toBe('La categoría ingresada no existe');
	})

})


describe('GET /products?search=name', () => {

	it('should return status code 200', async () => {
		const productName = 'monster';
		const response = await request(baseURL).get(`/products?search=${productName}`);
		expect(response.statusCode).toBe(200);
	})

	it('should return all products that match the name entered', async () => {
		const productName = 'monster';
		const response = await request(baseURL).get(`/products?search=${productName}`);
		expect(response.body[0].name.toLowerCase()).toContain(productName);
		expect(response.body[1].name.toLowerCase()).toContain(productName);
		expect(response.body[2].name.toLowerCase()).toContain(productName);
	})

	it('should return status code 404 if the product not exists', async () => {
		const productName = 'pepsi';
		const response = await request(baseURL).get(`/products?search=${productName}`);
		expect(response.statusCode).toBe(404);
	})

	it('should return "No se encontraron productos con ese nombre" if no products are found', async () => {
		const productName = 'pepsi';
		const response = await request(baseURL).get(`/products?search=${productName}`);
		console.log(response);
		expect(response.body.error).toBe("No se encontraron productos con ese nombre");
	})

})