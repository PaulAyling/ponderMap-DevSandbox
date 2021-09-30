import React, { useContext } from 'react'
import { DocumentContext } from '../../contexts/DocumentContext'


function ContextTestConsumer() {
    const documentContext = useContext(DocumentContext);
    console.log('documentContext',documentContext)
    return (
       <div>hiya!</div>
    )
}

export default ContextTestConsumer

