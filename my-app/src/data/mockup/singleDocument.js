// This consolidates all the mockups for easy import
import {documentViews } from './documentViews'
import {allComponents } from './allComponents'
import { getCurComponents} from '../dataFunctions/render'

//From prop
const docId = 1 // user picks this document
//Document Data
const documentView = documentViews[docId]
const componentIds = documentView.all_component_ids
const documentComponents = getCurComponents(componentIds,allComponents)
// console.log('SD allComponents',allComponents)
// console.log('SD documentComponents',documentComponents)

const singleDocument={
    documentView,
    documentComponents
}

export {singleDocument} 