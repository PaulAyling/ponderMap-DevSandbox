import { single_document } from "../../importSingleDocument";

const getUsersViewId = (user_id) =>{
    // 1. get all views for that user
    const usersViews = single_document.document_users[user_id].documentViews
    console.log('TEST ',usersViews.length)
    // console.log('usersViews:', usersViews)
    // 2. find the views data for the document
    const documentViews = single_document.document_views
    // console.log('documentViews',documentViews)

    const getUsersView = (documentViews, usersViews) =>{
        console.log('TEST 2 ',usersViews)
    // console.log('usersViews.length', usersViews.length)
	for (var i = 1; i <= Object.keys(documentViews).length; i++) {
        for (var i = 0; i <= usersViews.length; i++) {
            if(documentViews[i].doc_view_id == usersViews[i] )
            return 'documentViews[i].doc_view_id'
        }
	}
	return 'No matching ids found';

    }
    //4. find number that appears in both lists
    // const docViewsIds = getDocViewIds(documentViews)
    console.log('documentViews:', documentViews)
    // console.log('docViewsIds:', docViewsIds)
    console.log('usersViews: ', usersViews)
    console.log('getUsersView: ', getUsersView(documentViews, usersViews))


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

export { getUsersViewId, getUsersComponents}