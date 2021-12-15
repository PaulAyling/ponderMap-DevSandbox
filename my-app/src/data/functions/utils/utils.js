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

const getUsersVersion = (usersVersionDict) =>{
    const userId = currentUser.userId
    for (const [key, value] of Object.entries(usersVersionDict)) {
        if(key == userId){
            return value.versionId
        }
      }

}
const getComponentLevel = (componentId) =>{
    // // A. Get Data
    //   // 1. Get usersViewid
    //   const usersViewId = getUsersViewId()
    //   // 2. Get userView
    //       const documentViews = singleDocument.documentViews
    //       const usersView = documentViews[usersViewId]
    //   // 3. Get Components in usersView
    //       var usersViewsComponents = usersView.componentHierachy
    //       // console.log('usersViewsComponents',usersViewsComponents)    
    // // B. Calc level
    //     if(usersViewsComponents[componentId].parentId == null)
    //     return usersViewsComponents



        // else {
        //     parent1 = usersViewsComponents[componentId].parentId
        //     if(usersViewsComponents[parent1].parentId == null)
        //     return 1
        // }
        // else {
        //     parent1 = usersViewsComponents[componentId].parentId
        //     parent2 = usersViewsComponents[parent1].parentI
        //     if(usersViewsComponents[parent2].parentId == null)
        //     return 1
        // }
        // return 1
    // return usersViewsComponents
}

export {getUsersViewId,getUsersVersion, getComponentLevel}