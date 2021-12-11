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
    console.log('remove running.....removing ID:',componentId)
    // From the componentViews
    const documentViews = singleDocument.documentViews
    const usersViewId = getUsersViewId()
    const usersView = documentViews[usersViewId]
    console.log()
    var usersViewsComponents = usersView.componentHierachy
    // remove the component from the parents children list

    const componentsParentId = usersViewsComponents[componentId].parentId
    console.log('componentsParentId',componentsParentId)


    
    // remove component
    console.log('usersViewsComponents:',usersViewsComponents)
    const newUsersViewComponents = removeValue(usersViewsComponents,3)
    console.log('newUsersViewComponents:',newUsersViewComponents)
    
    


    const newState = 'newstate'
    return newState
}
const edit = (newContent,fieldName,components) =>{
    // console.log('Edit running.....')
    const newState = 'newstate'
    return newState
}


export {add,remove,edit}