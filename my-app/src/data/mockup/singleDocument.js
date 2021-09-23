// This consolidates all the mockups for easy import
import {documents } from './documents'
import {documentViews } from './documentViews'
import {allComponents } from './allComponents'
import {getCurDocIds, getCurDocMap, getCurComponents,getChildrenComponents, getCurLevel} from '../dataFunctions/render'


//From prop
const docId = 1 // user picks this document
//Document Data
const documentView = documentViews[docId]
const componentIds = documentViews.all_component_ids
console.log('componentIds',componentIds)
console.log('allComponents',allComponents)
// const docComponents = getCurComponents(componentIds,allComponents)

const singleDocument={
    documentView,
    // docComponents
}

export {singleDocument} 