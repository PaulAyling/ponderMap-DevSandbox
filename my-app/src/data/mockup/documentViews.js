// A MAP REPRESENTS A VIEW OF A DOCUMENT (DOC_ID)
// One document can have many views (A different view per user)
// One user can have One or zero unique views of any document
const documentViews = 
    {   // ID 1 & 2 are both views of the same 'doc_id':1
        1:{
        'all_component_ids':[1,2,3],
        'doc_id':1, 
        'component_hierachy':
            {
             1:{
                'id':1,
                'version_id':1,
                'parent':null,
                'children':[2,3],
                'siblings':[],
                'level':'paragraph',
                },
            2:{
                'id':2,
                'version_id':1,
                'parent':1,
                'children':[],
                'siblings':[],
                'level':'word',
                },
            3:{
                'id':3,
                'version_id':1,
                'parent':1,
                'children':[],
                'siblings':[],
                'level':'word',
                }
            },
        },
        2:
        {
            'all_component_ids':[1,2],
            'doc_id':1,
            'component_hierachy':
            {
                1:
                {
                   'id':1,
                   'version_id':1,
                   'parent':null,
                   'children':[2],
                   'siblings':[],
                   'level':'paragraph',
                },
               2:   
               {
                   'id':2,
                   'version_id':1,
                   'parent':1,
                   'children':[],
                   'siblings':[],
                   'level':'word',
               }
           }, 
        },

    }    

export  { documentViews }