import {singleDocument} from '../../importSingleDocument'
const util = require('util')

const contextMock = singleDocument

const add = (parentId,newComponent) =>{
    //1 create newNode
    const newNode = newComponent.newComponentNode('dd')

    //2 Add newNode to document_components
    var documentComponents = singleDocument.documentComponents
    const newDocumentComponents = { ...documentComponents, [newNode.component_id]:newNode}
    console.log('newDocumentComponents',newDocumentComponents)

    //3 Add node to document_views
    var documentViews = singleDocument.documentViews
    // const newDocumentViews = {..documentViews, }


    console.log('NewNode:',newNode)

    // 1. Add new component
    console.log('contextMock.document_components',contextMock.document_components)

        // get the current view
        // get the records from 
        
        // 2. UPDATE PARENT
        doc_view_id  = 1
        contextMock.document_views[1].component_hierachy[parentId].children.push(newId)
        console.log('contextMock',contextMock)
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