import { getUsersViewId } from '../utils/utils'
import { filterDict } from '../utils/dict_fn'

const getComponent = (componentId,documentState)=>{
    // A. Get data form curent user / current version
        const curComponent = documentState.document.documentComponents[componentId]
        const authenticatedUserId = documentState.authenticatedUserId
        const usersVersionId = documentState.document.documentComponents[componentId].usersVersion[authenticatedUserId].versionId
        const currentVersionContent = curComponent.versions[usersVersionId]
    // B. Create output of current componet / version for render
        const res_unformatted = {...curComponent,'versions':currentVersionContent }
        const res = { 
            'componentId': res_unformatted.componentId,
            'url':res_unformatted.url,
            'title':res_unformatted.versions.title,
            'imageUrl':res_unformatted.versions.imageUrl,
            'notes':res_unformatted.versions.notes,
            'allTags':res_unformatted.allTags,
        }
        return res  
    }

const getChildrenIds = (id,documentState)=>{
    // get the correct view for the user
        const usersViewId = getUsersViewId(documentState)
    // get the correct component hierachy
        const componentView = documentState.document.documentViews[usersViewId].componentHierachy
    // Find the children in the hierachy
        const res = filterDict(componentView,1,"parentId", "componentId")
    return res




  
}


export { getComponent, getChildrenIds}