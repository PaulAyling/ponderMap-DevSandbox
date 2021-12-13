import {singleDocument} from '../../importSingleDocument'
import { getUsersViewId, getUsersVersion } from '../utils/utils'
import { arrayIsValueInArray } from '../utils/array_fn'
import {currentUser} from '../../dbMockup/currentUser'

const util = require('util')
const contextMock = singleDocument

const edit = (fieldToUpdate,newContent,componentId) =>{
    const validFieldsToUpdate = ['title','imageUrl','notes']
    if(arrayIsValueInArray(validFieldsToUpdate,'title') != true){
        return "Error! Field Name is not valid"
    } else{

    // A. Create the Data
        // get documentCompoents
        const documentComponents = contextMock.documentComponents
        // console.log('documentComponents',documentComponents)
        // Get the documentComponent
        const documentComponent = contextMock.documentComponents[componentId]
        // console.log('documentComponent',documentComponent)  
        // Identify document version
        const docVersions = documentComponent.usersVersion
        const versionId = getUsersVersion(docVersions)
        console.log('versionId',versionId.versionId)
    // B. create new data parts
        // create new compnent (with new newContent for the fieldToUpdate)
    // C. Create final output
        


    // 1. Get usersViewId
        const usersViewId = getUsersViewId()
    // 2. Get userView
        const documentViews = singleDocument.documentViews
        const usersView = documentViews[usersViewId]
    const usersCompnentVersionId = ''
   




    }


    // console.log('contextMock',util.inspect(contextMock,{ depth: null }))
    // console.log('componentId:',componentId,'fieldToUpdate:',fieldToUpdate)
}

export {edit }