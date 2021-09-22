const users = [
    {
    'id':1,
    'name':'Paul',
    'documents':[1]
    },
    {
    'id':2,
    'name':'Nigel',
    'documents':[1]
    },
]

const documents = {
    'id':1,
    'component_hierachy':[
        {
            'id':1,
            'parent':null,
            'children':[2,3],
            'siblings':[]
        },
        {
            'id':2,
            'parent':1,
            'children':[],
            'siblings':[]
        },
        {
            'id':3,
            'parent':1,
            'children':[],
            'siblings':[]
        }
    ]
}
const components = {
    11:{
        1:{
        'id':1,
        'level':'paragraph',
        'title':'About Bicycles',
        'url':'',
        'image_url':'',
        'notes':'',
        'tags':['lesiure','sport']
        },
        2:{
            'id':2,
            'level':'word',
            'title':'Road Bikes',
            'url':'https://en.wikipedia.org/wiki/Road_bicycle',
            'image_url':'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Look_795_30th_Anniversary_Dura-Ace_9100-Mavic_Custom_Build_%2830636542393%29.jpg/300px-Look_795_30th_Anniversary_Dura-Ace_9100-Mavic_Custom_Build_%2830636542393%29.jpg',
            'notes':'Road racing can be fun...',
            'tags':['lesiure','sport']
        },
        3:{
            'id':3,
            'level':'paragraph',
            'title':'MOuntain Bikes',
            'url':'https://en.wikipedia.org/wiki/Mountain_biking',
            'image_url':'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/MtnBiking_SedonaMag.jpg/250px-MtnBiking_SedonaMag.jpg',
            'notes':'MOuntain bikeing is more fun',
            'tags':['lesiure','sport','extreme']
        }
    } 
}
   



export {users, documents, components}