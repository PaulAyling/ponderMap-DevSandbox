import { getUsersVersion } from '../utils/utils'
import { arrayIsValueInArray } from '../utils/array_fn'
import { filterDict } from '../utils/dict_fn'

// const util = require('util')
const edit = (field,newFieldValue,componentId,cardContent) =>{
    console.log('EDIT FN:fieldToUpdate',field,)
    console.log('EDIT FN:newContent',newFieldValue)
    console.log('EDIT FN:componentId',componentId)
    console.log('EDIT FN:document',cardContent)
    const validFieldsToUpdate = ['title','imageUrl','notes']
    if(arrayIsValueInArray(validFieldsToUpdate,'title') !== true){
        return "Error! Field Name is not valid"
    } else{

        const res = {
            ...cardContent,
            [field]:newFieldValue
        }
        return res



    // A. Create the Data
    //     // get documentComponents
    //         const documentComponents = document.documentComponents
    //         // Get the documentComponent
    //         const documentComponent = document.documentComponents[componentId]
    //         console.log('documentComponent',documentComponent)
    //     // Identify document version
    //         const docVersions = documentComponent.usersVersion
    //         const versionId = getUsersVersion(docVersions)
    //     // Get the usersComponent
    //         const usersComponent = JSON.parse(JSON.stringify(documentComponent.versions[versionId]))
    // // B. create new data parts
    //     // update field
    //         usersComponent[fieldToUpdate]  = newContent
    //     //update newDocumentComponents
    //         const newDocumentComponentsVersions = {...documentComponent.versions, [versionId]:usersComponent}
    //         const newDocumentComponent = {...documentComponent,'usersVersions':newDocumentComponentsVersions }
    //         const newDocumentComponents = {...documentComponents,[componentId]:newDocumentComponent}
    // // C. Create final output
    //     const res = {...document, 'documentComponents':newDocumentComponents,}
    //     // console.log(' edit outputr....',util.inspect(res,{ depth: null }))
    //     return res
    }
}

export {edit }