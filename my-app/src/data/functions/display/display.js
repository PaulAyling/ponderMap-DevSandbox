import { singleDocument } from "../../importSingleDocument";
//d

//3. Get all the components for given docViewId
const getUsersComponents = (docViewId) => {
	const all_component_ids = documentViews[docViewId].all_component_ids;
	var res = {};
	for (var i = 0; i <= all_component_ids.length; i++) {
		res[i] = allComponents[i];
	}
	return res;
};

export { getUsersComponents}