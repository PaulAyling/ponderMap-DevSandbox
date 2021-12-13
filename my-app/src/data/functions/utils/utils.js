import {singleDocument} from '../../importSingleDocument'
import {currentUser} from '../../dbMockup/currentUser'

const getUsersViewId = () =>{
    //Helper functions
    const dictionaryItemCount=(dict)=>{
        return Object.keys(dict).length
    }
    // 1. All doc_view_id for current user
        const userId = currentUser.userId
        const userViewIds = singleDocument.documentUsers[userId].documentViews
    // 2. All doc_view_id ids for current document
        const getDocViewIds = (documentViews) =>{
            var res = [];
        for (var i = 1; i <= dictionaryItemCount(documentViews); i++) {
            res.push(documentViews[i].docViewId)
        }
        return res;
        }
        const docViewsIds = getDocViewIds(singleDocument.documentViews)
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
        return getUsersView(docViewsIds, userViewIds)
}

const getUsersComponents = (docViewId) => {
	const all_component_ids = documentViews[docViewId].all_component_ids;
	var res = {};
	for (var i = 0; i <= all_component_ids.length; i++) {
		res[i] = allComponents[i];
	}
	return res;
};
const getUsersVersion = (usersVersionDict) =>{
    const userId = currentUser.userId
    for (const [key, value] of Object.entries(usersVersionDict)) {
        console.log('DO A LOOP',key, value);
        if(key == userId){
            return value
        }
      }

}

export {getUsersViewId,getUsersComponents,getUsersVersion}