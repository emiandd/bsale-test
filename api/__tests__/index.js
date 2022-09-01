const request = require('supertest');
const baseURL = 'http://localhost:3001';

describe('GET /products', () => {

	it('should return status code 200', async () => {
		const response = await request(baseURL).get('/products');
		expect(response.statusCode).toBe(200);
	})

	it('should not be empty', async () => {
		const response = await request(baseURL).get('/products');
		expect(response.body).not.toHaveLength(0);
	})

})