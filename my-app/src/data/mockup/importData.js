/* This consolidates all the raw data into a working data sets for the application
document : This is all the data about the document converted into a form for easy access and manipulation
users: information about all users that are associated with that document
*/
import {documents } from './documents'
import {documentViews } from './documentViews'
import { allComponents } from './allComponents'
import { users } from './users'
import { getComponents} from '../dataFunctions/render'

//From prop
const docId = 1 // hardcoded for testing developemnt

//SIMULATED API QUERIES {these would be the queris to the database}
const document = documents[docId]
const documentComponents = getComponents(docId)
const documentUsers = 
const users = users

const singleDocument={
    'users':users,
    'header':document,
    'map':documentViews,
    'components':documentComponents
}

export {singleDocument} 