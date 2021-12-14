import { v4 as uuidv4 } from 'uuid';


function Tags(props) {
const tags = props.tags
const allTags = tags.map(function(curChilds){
    return (
        <div key={uuidv4()} className='text-xs text-white rounded-xl bg-red-400 p-1 m-2 hover:bg-blue-300'>{curChilds}</div>
    )
    })
    return (
        <div className='flex flex-row'>
            {allTags}
        </div>
    )
}

export default Tags
