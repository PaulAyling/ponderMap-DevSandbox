
import {documents } from './documents'
import {documentViews } from './documentViews'
import { allComponents } from './allComponents'
import { users } from './users'
import { getComponents} from '../dataFunctions/render'
/* PURPOSE: import database data and create the working datasets for the application
(Three outputs)
1. dbData : All data for a given document in the database form
2. appData: All Data for a given document reformated for use in the application
3. user: All data related to current user & all contributors of the current document
*/
//1. Create dbData
    const docId = 1 // hardcoded for testing developemnt
    //SIMULATED API QUERIES {these would be the queris to the database}
    const document = documents[docId]                       // Dcoument data
    const documentComponents = getComponents(docId)         // All components for document
    const documentUserIds = document.user_ids               // Document contributors
    //Helper function
    const getRecords = (filterValues,dict) => {
        const res = dict.filter(({
            key
        }) => filterValues.includes(key));
        return res
    }
    const documentUsers = getRecords([1],users) // Users data for the contributors
    const dbData={
        'users':users,
        'documentUsers':documentUsers,
        'documentUserIds':documentUserIds,
        'header':document,
        'components':documentComponents, // All components that belong to document
        'map':documentViews, //layout of the components for a given view
    }
//2. Create appData Document 
    

export {dbData} 


