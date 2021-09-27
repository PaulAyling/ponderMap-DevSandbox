import React, { useContext } from 'react'
import { DocumentContext } from '../../contexts/DocumentContext'


function ContextTestConsumer() {
    const documentContext = useContext(DocumentContext);
    console.log('documentContext',documentContext)
    return (
        <DocumentContext.Consumer>{(context)=> 
            {
                const { mood }= context
                return (
                    <div>hello {mood}</div>
                )
            }

            }
        </DocumentContext.Consumer>

    )
}

export default ContextTestConsumer

