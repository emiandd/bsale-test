
/* This add a new category option */
const addOption = (id, name) => {
	const option = `
		<option value="${id}">${name}</option>
	`;
	return option;
}

export default addOption;