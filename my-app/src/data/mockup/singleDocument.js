// This consolidates all the mockups for easy import
import {documentViews } from './documentViews'
import { getComponents} from '../dataFunctions/render'

//From prop
const docId = 1 // user picks this document
//Document Data
const documentView = documentViews[docId]
const documentComponents = getComponents(docId)

const singleDocument={
    documentView,
    documentComponents
}

export {singleDocument} 