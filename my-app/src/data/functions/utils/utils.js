const getUsersViewId = (documentState) =>{
    //Helper functions
    const dictionaryItemCount=(dict)=>{
        return Object.keys(dict).length
    }
    // 1. All doc_view_id for current user
    const document = documentState.document
    const userId = documentState.authenticatedUserId
        const userViewIds = document.documentUsers[userId].documentViews
    // 2. All doc_view_id ids for current document
        const getDocViewIds = (documentViews) =>{
            var res = [];
        for (var i = 1; i <= dictionaryItemCount(documentViews); i++) {
            res.push(documentViews[i].docViewId)
        }
        return res;
        }
        const docViewsIds = getDocViewIds(document.documentViews)
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
    // const userId = authenticatedUser.userId
    // for (const [key, value] of Object.entries(usersVersionDict)) {
    //     if(key == userId){
    //         return value.versionId
    //     }
    //   }

}

const getComponentLevel = (componentId,documentState)=> {
    const usersViewId =   getUsersViewId(documentState)
    const userComponenthierachy = documentState.document.documentViews[usersViewId].componentHierachy
    const curComponentParent = userComponenthierachy[componentId].parentId
    console.log('curComponentParent',curComponentParent)

    return 1
}

export {getUsersViewId,getUsersVersion, getComponentLevel}