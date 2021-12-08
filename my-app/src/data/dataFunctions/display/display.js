import { single_document } from "../../importSingleDocument";
//d
const getUsersViewId = (user_id) =>{
    // 1. Get all doc_view_id for current user
    const userViewIds = single_document.document_users[user_id].documentViews
    // 2. Gewt all doc_view_id ids for current document
        const documentViews = single_document.document_views
        //3. get Document View Ids
        const getDocViewIds = (documentViews) =>{
            var res = {};
        for (var i = 1; i <= documentViews.length; i++) {
            res[i] = documentViews[i].doc_view_id;
        }
        return res;
        }
    const docViewsIds = getDocViewIds(documentViews)

    //3. Identify doc_view_id that is in user and document 
        const getUsersView = (documentViews, userViewIds) =>{
        // console.log('usersViews.length', usersViews.length)
        for (var i = 1; i <= Object.keys(documentViews).length; i++) {
            for (var i = 0; i <= userViewIds.length; i++) {
                if(documentViews[i].doc_view_id == userViewIds[i] )
                return 'documentViews[i].doc_view_id'
            }
        }
        return 'No matching ids found';
        }



    //4. find number that appears in both lists
    // const docViewsIds = getDocViewIds(documentViews)
    console.log('docViewsIds:', docViewsIds)
    // console.log('userViewIds: ', userViewIds)   //done OK
    // console.log('getUsersView: ', getUsersView(documentViews, usersViews))


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