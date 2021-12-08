
import {documents } from './dbMockup/documents'
import {documentViews } from './dbMockup/documentViews'
import { allComponents } from './dbMockup/allComponents'
import { users } from './dbMockup/users'
import { getComponents} from './dataFunctions/display/render'

import { getUsersViewId } from '../data/dataFunctions/display/display'

// *TODO: document components contains an extra value called 0 - eliiminate this 

/* PURPOSE: import database data & create document data (for a single document)
*/
//1. Create single_document
    const docId = 1
    const userId = 1 // hardcoded - this is the user id of current user
    const usersView = 1// this is the view for that user of the singleDocument
    console.log('usersView',usersView)
    //SIMULATED API QUERIES {these would be the queries to the database}
    const document = documents[docId]                       // Dcoument data
    const documentComponents = getComponents(docId)         // All components for document
    const documentUserIds = document.user_ids               // Document contributors
    //Helper function (for documentUsers)
    const getRecords = (filterValues,dict) => {
        var res = {};
        for (var i = 1; i <= filterValues.length; i++) {
            res[i] = dict[i];
        }
        return res;
    }
    const documentUsers = getRecords(documentUserIds,users) // Users data for the contributors
    const single_document={
        'header':document,
        'document_users':documentUsers,
        'document_views':documentViews, //layout of the components for a given view
        'document_components':documentComponents, // All components that belong to document
    }
    console.log('single_document',single_document)

export {single_document} 


