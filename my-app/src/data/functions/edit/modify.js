import {singleDocument} from '../../importSingleDocument'
import { getUsersViewId } from '../utils/utils'
import { arrayRemoveValue } from '../utils/array_fn'
const util = require('util')

const contextMock = singleDocument

const add = (parentId,newComponent) =>{
    //1 ADD NEW COMPONENTS
    //A Create & Add newComponentNode
    const newComponentNode = newComponent.newComponentNode('dd')
    const documentComponents = singleDocument.documentComponents
        const newDocumentComponents = { ...documentComponents, [newComponentNode.componentId]:newComponentNode}
    //B Create & Add newViewNode    
    const newViewNode = newComponent.newViewNode()
    const documentViews = singleDocument.documentViews
    const usersViewId = getUsersViewId()
    const usersView = documentViews[usersViewId]
    const newDocumentViewsComponentHierachy = { ...usersView.componentHierachy, [newComponentNode.componentId]:newViewNode}
    const newDocumentView = {...usersView, 'componentHierachy':newDocumentViewsComponentHierachy}
        const newDocumentViews = {...documentViews, [usersViewId]:newDocumentView}
    // console.log('newDocumentViews',newDocumentViews)
    // 2. UPDATE PARENT
    contextMock.documentViews[usersViewId].componentHierachy[parentId].children.push(newComponentNode.componentId)
    const res = {
        ...contextMock,
        'documentComponents':newDocumentComponents,
        'documentViews':newDocumentViews
    }
    return res

}
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
            delete newUsersViews.componentHierachy[componentId]
            // Create new documentViews
            const newDocumentViews = {...documentViews,[usersViewId]:newUsersViews}
        // 3. Delete from componentView
            // console.log('usersViewsComponents',usersViewsComponents)
            delete usersViewsComponents[componentId]
    // C. Construct Output
        // console.log('contextMock',contextMock)
        // console.log('contextMock',contextMock)
        // console.log('usersViewsComponents',usersViewsComponents)
            // const res = {...contextMock,documentComponent}
        // 
    
    
    
    
    const newState = 'newstate'
    return newState
}
const edit = (newContent,fieldName,components) =>{
    // console.log('Edit running.....')
    const newState = 'newstate'
    return newState
}


export {add,remove,edit}