// A MAP REPRESENTS A VIEW OF A DOCUMENT (DOC_ID)
// One document can have many views (A different view per user)
// One user can have One or zero unique views of any document
const documentViews = 
    {   // ID 1 & 2 are both views of the same 'doc_id':1
        1:{
        'docViewId':1,
        'allComponentIds':[1,2,3],
        'docId':1, 
        'componentHierachy':
            {
             1:{
                'componentId':1,
                'versionId':1,
                'parentId':null,
                // 'children':[2,3],   //this filed is obsolete left in for checking
                // 'siblings':[], //this filed is obsolete left in to remoind me about this feature
                'level':'paragraph'},
            2:{
                'componentId':2,
                'versionId':1,
                'parentId':1,
                // 'children':[], //this filed is obsolete left in for checking
                // 'siblings':[], //this filed is obsolete left in for checking
                'level':'word'},
            3:{
                'componentId':3,
                'versionId':1,
                'parentId':1,
                // 'children':[], //this filed is obsolete left in for checking
                // 'siblings':[], //this filed is obsolete left in for checking
                'level':'word'}
            },
        },
        2:
        {
            'docViewId':2,
            'allComponentIds':[1,2],
            'docId':1,
            'componentHierachy':
            {
                1:
                {
                   'componentId':1,
                   'versionId':1,
                   'parentId':null,
                //    'children':[2], //this filed is obsolete left in for checking
                //    'siblings':[], //this filed is obsolete left in for checking
                   'level':'paragraph'},
               2:   
               {
                   'componentId':2,
                   'versionId':1,
                   'parentId':1,
                //    'children':[], //this filed is obsolete left in for checking
                //    'siblings':[], //this filed is obsolete left in for checking
                   'level':'word'}
           }, 
        },
    }    

export  { documentViews }