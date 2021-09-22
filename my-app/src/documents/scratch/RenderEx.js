import React from 'react'

const transport=['car','trike','cycle']

var childList = transport.map(function(transport){
    return <div className='bg-red-500 p-3 border-black border-2'>{transport}</div>;
  })
const ChildEx = (props) =>{
    return(
        <div className='flex flex-col'>
            {childList}
        </div>
    )

}

function RenderEx() {
    return (
        <section>
            <header>This is a header2</header>
            <ChildEx transport={transport}/>
        </section>
        
    )
}

export default RenderEx
