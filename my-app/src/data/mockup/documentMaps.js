// Maps of every version of every document for any user
// Maps show how all the components are linked together
const documentMaps = 
    {
        1:{
        'all_component_ids':[1,2,3],
        'doc_id':1,
        'component_hierachy':
            {
             1:{
                'id':1,
                'parent':null,
                'children':[2,3],
                'siblings':[],
                'level':'paragraph',
                },
            2:{
                'id':2,
                'parent':1,
                'children':[],
                'siblings':[],
                'level':'word',
                },
            3:{
                'id':3,
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
                   'parent':null,
                   'children':[2,3],
                   'siblings':[],
                   'level':'paragraph',
                },
               2:   
               {
                   'id':2,
                   'parent':1,
                   'children':[],
                   'siblings':[],
                   'level':'word',
               }
           }, 
        },

    }    

export  { documentMaps }