import React from 'react'

const ChildEx = (props) =>{
    return(
        <div className='flex flex-col bg-green-300'>
            <div>{props.data.name}</div>
        </div>
    )

}

export default ChildEx
