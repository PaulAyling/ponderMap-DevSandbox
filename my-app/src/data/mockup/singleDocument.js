// This consolidates all the mockups for easy import
import {documents } from './documents'
import {documentViews } from './documentViews'
import {allComponents } from './allComponents'
import { getCurComponents} from '../dataFunctions/render'


//From prop
const docId = 1 // user picks this document
//Document Data
const documentView = documentViews[docId]
const componentIds = documentView.all_component_ids
const docComponents = getCurComponents(componentIds,allComponents)

const singleDocument={
    documentView,
    docComponents
}

export {singleDocument} 