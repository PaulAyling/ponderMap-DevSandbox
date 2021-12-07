import { single_document } from "../../importSingleDocument";

const getUsersView= (user_id) =>{
    // 1. get all views for that user
    const usersViews = single_document.document_users[user_id]
    // console.log('usersViews:', usersViews)
    // 2. find the views data for the document
    const documentViews = single_document.document_views
    // console.log('documentViews',documentViews)
    // 3. Get just the view Ids
    const getDocViewIds = (documentViews) =>{
        var res = {};
	for (var i = 1; i <= documentViews.length; i++) {
		res[i] = documentViews[i].doc_view_id;
	}
	return res;
    }
    const docViewsIds = getDocViewIds(documentViews)
    console.log('docViewsIds test:', documentViews[2].doc_view_id)
    console.log('docViewsIds:', docViewsIds)

}

//3. Get all the components for given docViewId
const getUsersComponents = (docViewId) => {
	const all_component_ids = documentViews[docViewId].all_component_ids;
	var res = {};
	for (var i = 0; i <= all_component_ids.length; i++) {
		res[i] = allComponents[i];
	}
	return res;
};

export { getUsersView, getUsersComponents}