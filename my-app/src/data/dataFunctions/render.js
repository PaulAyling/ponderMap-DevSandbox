import { allComponents } from '../mockup/allComponents'
import { documentViews } from '../mockup/documentViews'
import { users } from '../mockup/users'


// 1. Retrieve All DocViewIds for a given user
const getCurDocIds = (userId) =>{
    return users[userId].documentViews
}
// 2. Retrieve a single DocView
const getDocView = (docViewId) =>{
    return documentViews[docViewId]
}
//Get all the components for an arrang of component_idsgiven 
const getDocComponents = (componentIds) =>{
    var res ={}
    for (var i = 0; i <= componentIds.length; i++) {
        res[i]=allComponents[i]
     }
     return res
}
const getCurComponent = (id,components) =>{
    console.log('getCurComponent run...')
    // console.log('allComponents',allComponents)


    // const curComponent = components[id]
    // console.log('IN FCN:',curComponent)
    // const curVerDetails = curComponent.versions[versionId]
    // return {
    //     curComponent,
    //     ...curVerDetails
    // }

}
//get the current level
const getCurLevel = (componentId,documentView) =>{
    return documentView.component_hierachy[componentId].level
}

const getChildrenComponents = (componentId, components, curDocMap) =>{
    const getCurChildrenIds = (componentId,curDocMap) =>{
        // console.log('componentId',componentId)
        // console.log('documentMap',curDocMap.component_hierachy[componentId].children)
        return curDocMap.component_hierachy[componentId].children
    }
    const childrenIds = getCurChildrenIds(componentId,curDocMap)

    const getComponent = (num) =>{
        return components[num]
     }
    const res = childrenIds.map(getComponent)
    return res
}


export  { getCurDocIds, getDocView, getDocComponents,  getCurLevel, getChildrenComponents, getCurComponent}
/*
FUNCTIONS USED TO RENDER THE PONDERMAP DOCUMENT


 HOW THIS WORKS
1. starting with a userId all docVerId can be retrieved using getDocIds
A docVerId is a version of a document(1 doc has different docVerId, unique per user)

2. Any docVerId has a docMap (this shows the relationships between all containers in the 
    users version of this document)

3. All components for a docMpa relating to a docVerId can be found but using the getComponents
funciton */