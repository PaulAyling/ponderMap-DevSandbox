const BtnVisable = {
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
// In time I will depreciate this with tailwind custom components
const StyleDefaults = {
        'paragraph':{
                'container_outerStyle':' rounded flex flex-col justify-between p-1 bg-gray-300 text-black',
                'header_text':'text-center font-extralight font-bold text-xl',       
        },
        'word':{
                'container_outerStyle':'rounded flex flex-col justify-between p-1 m-1 bg-gray-100 text-black',
                'header_container':'hover:bg-gray-300 rounded ',
                'header_text':'text-center font-extralight font-bold text-xl text-decoration: underline text-blue',
        }
}
export { BtnVisable, StyleDefaults } 
