import {singleDocument} from '../../importSingleDocument'
import {currentUser} from '../../dbMockup/currentUser'
const util = require('util')

const contextMock = singleDocument

const add = (parentId,newComponent) =>{
    //1 create & Add newComponentNode
    const newComponentNode = newComponent.newComponentNode('dd')
    // console.log('newComponentNode',newComponentNode) 
        var documentComponents = singleDocument.documentComponents
        const newDocumentComponents = { ...documentComponents, [newComponentNode.componentId]:newComponentNode}
        //2 Create & Add newViewNode    
        const newViewNode = newComponent.newViewNode()
        // console.log('newViewNode',newViewNode) 
                var documentViews = singleDocument.documentViews
                const newDocumentViews = { ...documentViews, [newViewNode.componentId]:newViewNode}

    console.log('newDocumentComponents',newDocumentComponents)
    console.log('newDocumentViews',newDocumentViews)

    // const newDocumentViews = {..documentViews, }


    // console.log('NewNode:',newNode)

    // 1. Add new component
    // console.log('contextMock.document_components',contextMock.document_components)

        // get the current view
        // get the records from 
        
        // 2. UPDATE PARENT
        // doc_view_id  = 1
        // contextMock.document_views[1].component_hierachy[parentId].children.push(newId)
        // console.log('contextMock',contextMock)
    // console.log(util.inspect(contextMock,{ depth: null }))



    // const newState = 'newstate'
    // return newState
}
const remove = () =>{
    // console.log('removeLink running.....')
    const newState = 'newstate'
    return newState
}
const edit = (newContent,fieldName,components) =>{
    // console.log('Edit running.....')
    const newState = 'newstate'
    return newState
}


export {add,remove,edit}