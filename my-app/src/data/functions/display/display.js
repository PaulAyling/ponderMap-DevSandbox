import { single_document } from "../../importSingleDocument";
//d
const getUsersViewId = (user_id) =>{
    // 1. All doc_view_id for current user
        const userViewIds = single_document.document_users[user_id].documentViews
    // 2. All doc_view_id ids for current document
        const getDocViewIds = (documentViews) =>{
            var res = [];
        for (var i = 1; i <= dictionaryItemCount(documentViews); i++) {
            res.push(documentViews[i].doc_view_id)
        }
        return res;
        }
        const docViewsIds = getDocViewIds(single_document.document_views)
    //3. doc_view_id in user and in document 
        const getUsersView = (docViewsIds, userViewIds) =>{
            for (var i = 0; i < docViewsIds.length; i++) {
                for (var a = 0; a < userViewIds.length; a++) {
                    if(docViewsIds[i] == userViewIds[a]){
                        return docViewsIds[i]
                    }
                }
            }
        return 'No matching ids found';
    }
        const docViewIdsSample = [11,12,13,14,15,16,17,18]
        const userIdsSample = [18,4]
        return getUsersView(docViewsIds, userViewIds)
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