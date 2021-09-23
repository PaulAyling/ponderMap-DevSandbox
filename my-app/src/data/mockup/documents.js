// All the documents. One document has many versions. 
// Only 1 user can be the creator of the document
// 1 user can create one version of any document.
// Maps of every version of every document for any user
// Maps show how all the components are linked together
const documents = {
    1:{
    'id':1,
    'created_by':1,
    'created_on':'2021-08-01',
    'Document_title':'Pauls first pondermap'
    }
}

export  { documents }