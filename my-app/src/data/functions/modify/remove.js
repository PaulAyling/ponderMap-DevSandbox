import {singleDocument} from '../../importSingleDocument'
import { getUsersViewId } from '../utils/utils'
import { arrayRemoveValue,arrayIsValueInArray } from '../utils/array_fn'
const util = require('util')
const contextMock = singleDocument

const remove = (componentId) =>{
    // A. Create data
    // B. Create new parts with removed components
    // C. Construct Output
    
    // A. Create data
        // 1. Get usersViewid
            const usersViewId = getUsersViewId()
        // 2. Get userView
            const documentViews = singleDocument.documentViews
            const usersView = documentViews[usersViewId]
        // 3. Get Components in usersView
            var usersViewsComponents = usersView.componentHierachy
            // console.log('usersViewsComponents',usersViewsComponents)
            
    // B. Create new parts with removed components
        // 1. Remove the id from parents child
            //Get parentID
            const componentsParentId = usersViewsComponents[componentId].parentId
            //Get parents children
            const parentChildren = usersView.componentHierachy[componentsParentId].children
            //Remove currentId from childrens list
            const newParentChildren = arrayRemoveValue(parentChildren,componentId)
            //Create newUsersView with new children list
            const newParentComponent = {...usersView.componentHierachy[componentsParentId],'children':newParentChildren}
            const newUsersViewOCmponentHierachy = {...usersView.componentHierachy,[newParentComponent.componentId]:newParentComponent}
            const newUsersViews = {...usersView, 'componentHierachy':newUsersViewOCmponentHierachy}   
        // 2. Delete from documentViews
            //delete from usersView
            const newUsersViews2 = JSON.parse(JSON.stringify(newUsersViews))
            delete newUsersViews2.componentHierachy[componentId]
            // Create new documentViews
            const newDocumentViews = {...documentViews,[usersViewId]:newUsersViews}
        // 3. Delete from componentView
            // console.log('usersViewsComponents',usersViewsComponents)
            delete usersViewsComponents[componentId]
    // C. Construct Output
        // console.log('usersViewsComponents',usersViewsComponents)
        //Leave deleted component in data becuase it may be used by someone else
        const res = {...contextMock,'documentViews':newDocumentViews}
    return res
}



export {remove}