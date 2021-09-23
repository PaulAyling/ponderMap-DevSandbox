// This consolidates all the mockups for easy import
import {documents } from './documents'
import {documentViews } from './documentViews'
import {allComponents } from './allComponents'
import {getCurDocIds, getCurDocMap, getCurComponents,getChildrenComponents, getCurLevel} from './dataFunctions/render'


//From prop
const docId = 1 // user picks this document
//Document Data
const docMap = documentViews[docId]
const componentIds = docMap.all_component_ids
const docComponents = getCurComponents(componentIds,allComponents)

const singleDocument={
    docMap,
    docComponents
}

export {singleDocument} 