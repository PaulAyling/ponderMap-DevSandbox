const Btn_visable = {
        'paragraph':{
                'drag':false,
                'add':false,
                'delete':false,
                'url':false,
                'share':false
        },
        'word':{
                'drag':false,
                'add':false,
                'delete':false,
                'url':false,
                'share':false
        }
    }

const Style_defaults = {
        'paragraph':{
                'header_outerStyle':'rounded flex flex-row justify-between p-2 bg-gray-300 text-black',
                'body_outerStyle':'flex flex-col border-black border-2 p-1 w-full',
                
                
        },
        'word':{
                'header_outerStyle':'ml-1 mr-1 flex flex-row justify-between  bg-white text-black',
                'body_outerStyle':  'ml-1 p-1  flex flex-col border-red w-full',
        }
}
export { Btn_visable, Style_defaults } 
