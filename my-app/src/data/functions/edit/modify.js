import {singleDocument} from '../../importSingleDocument'
import { getUsersViewId } from '../utils/utils'
import { removeValue } from '../utils/array_fn'
const util = require('util')

const contextMock = singleDocument

const add = (parentId,newComponent) =>{
    //1 ADD NEW COMPONENTS
    //A create & Add newComponentNode
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
    const newContextMock = {
        ...contextMock,
        'documentComponents':newDocumentComponents,
        'documentViews':newDocumentViews
    }
    return newContextMock

}
const remove = (componentId) =>{
    // A. Create data
        // 1. Get usersViewid
        // 2. Get userView
        // 3. Get Components in usersView
    // B. Remove components
        // 1. Delete from UsersView
        // 2. Remove the id from parents child
        // 3. Delete from componentView

    // A. Create data
        // 1. Get usersViewid
        const usersViewId = getUsersViewId()
        // 2. Get userView
        const documentViews = singleDocument.documentViews
        const usersView = documentViews[usersViewId]
        // 3. Get Components in usersView
        var usersViewsComponents = usersView.componentHierachy
    // B. Remove components
        // 1. Remove the id from parents child
            //Get parentID
            //Get parents children
            //Remove currentId from childrens list
            //update usersView with new children list
        const componentsParentId = usersViewsComponents[componentId].parentId
        // const newChildren = removeValue(usersViewsComponents,3)
        
        
        
        // 2. Delete from UsersView
        // 3. Delete from componentView

 .log('newUsersViewComponents:',newUsersViewComponents)
    
    


    const newState = 'newstate'
    return newState
}
const edit = (newContent,fieldName,components) =>{
    // console.log('Edit running.....')
    const newState = 'newstate'
    return newState
}


export {add,remove,edit}