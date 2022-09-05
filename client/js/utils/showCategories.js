import addOption from '../components/addOption.js';
const selectCategories = document.querySelector('#categories');

/**
 * It loops through the categories array, and for each category, it adds an option to the select element
 * @param categories - This is the array of categories that we get from the API.
 */
const showCategories = (categories) => {
	for(let i = 0; i < categories.length; i++){
		const id = categories[i].id;
		const name = categories[i].name;
		selectCategories.innerHTML = selectCategories.innerHTML + addOption(id, name);
	}
}

export default showCategories;