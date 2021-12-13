import {singleDocument} from '../../importSingleDocument'
import { getUsersViewId } from '../utils/utils'
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
export {add}