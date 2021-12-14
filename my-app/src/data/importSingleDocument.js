
/* PURPOSE: import database data & create document data (for a single document)*/
import {documents } from './dbMockup/documents'
import {documentViews } from './dbMockup/documentViews'
import { users } from './dbMockup/users'
import { getComponents} from './functions/display/render'
import {newComponent} from '../data/classes/contextClasses'
import {currentUser} from './dbMockup/currentUser'

//1. Create Data for single_document
    const docId = 1 //seelected by user
    //SIMULATED API QUERIES {these would be the queries to the database}
    const document = documents[docId]                       // Dcoument data
    const documentComponents = getComponents(docId)         // All components for document
    const documentUserIds = document.userIds               // Document contributors
    // Get documentUsers
    const getRecords = (filterValues,dict) => {
        var res = {};
        for (var i = 1; i <= filterValues.length; i++) {
            res[i] = dict[i];
        }
        return res;
    }
    const documentUsers = getRecords(documentUserIds,users) // Users data for the contributors
//2. Create Classes for single document





//3. Create document Context Data
    const singleDocument={
        'header':document,
        'documentUsers':documentUsers,
        'documentViews':documentViews, //layout of the components for a given view
        'documentComponents':documentComponents, // All components that belong to document,
        'newComponent':newComponent,
        'currentUserId':currentUser.userId
    }
export {singleDocument} 


