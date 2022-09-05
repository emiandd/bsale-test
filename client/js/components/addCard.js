import capitalizeName from '../utils/capitalizeName.js';

// This is a function that returns a card with the information of the product.
const addCard = (url_image, name, price) => {
	const imgNoAvailable = 'https://www.hongshen.cl/wp-content/uploads/2016/07/no-disponible.png';
	const card = `
		<div class="card" style="width: 18rem;">
			<div class="imgCard d-flex align-items-center justify-content-center p-2">
				<img src="${url_image ? url_image : imgNoAvailable}"alt="...">
			</div>
			<div class="card-body p-2 bg-light">
				<p class="card-text">${capitalizeName(name)}</p>
				<p class="text-primary pt-2">$${price.toLocaleString('de-DE' , { style: 'currency', currency: 'CLP' })}</p>
			</div>
		</div>
	`;
	return card;
}

export default addCard;