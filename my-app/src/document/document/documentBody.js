import React from 'react'
import Card from '../card/card'


function DocumentBody(props) {
   
    return (
        <div class='text-center font-extralight font-bold text-xl bg-cyan-500 '>
            <p class="text-red">Body of Document</p>
            starting id:{props.startingId}
            <Card id={props.startingId}/>
            
        </div>
        
    )
}

export default DocumentBody
