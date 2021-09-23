/* HOW THIS WORKS
1. starting with a userId all docVerId can be retrieved using getDocIds
A docVerId is a version of a document(1 doc has different docVerId, unique per user)

2. Any docVerId has a docMap (this shows the relationships between all containers in the 
    users version of this document)

3. All components for a docMpa relating to a docVerId can be found but using the getComponents
funciton */

// Get the docVerId belonging to the user (1 doc has different docVerId, unique per user)
const getCurDocIds = (userId, user) =>{
    return user[userId].documents
}
//Get the document map that belongs to a given version_id
const getCurDocMap = (docVerId,documents) =>{
    return documents.versions[docVerId]
}
//Get all the components for an arrang of component_idsgiven 
const getCurComponents = (componentIds,components) =>{
    var res ={}
    for (var i = 0; i <= componentIds.length; i++) {
        res[i]=components[i]
     }
     return res
}

//Get the component data for children of a given component_id
const getCurChildren = (componentId,curComponents,curDocMap) =>{
    const children_ids = curDocMap.component_hierachy[componentId].children
    const componentList = curComponents
    console.log('componentLIst', componentList)
    
    const getComponent = (num) =>{
        return componentList[num]
    }
    const res = children_ids.map(getComponent)
    return res

}


export  { getCurDocIds, getCurDocMap, getCurComponents, getCurChildren }