import React from 'react'

const ChildEx = (props) =>{
    // console.log('props:',props)
    return(
        <div className='flex flex-col bg-green-300'>
            <div>{props.data.title}</div>
        </div>
    )

}

export default ChildEx
