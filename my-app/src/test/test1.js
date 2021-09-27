import React from 'react'
// import Paragraph from '../documents/components/Paragraph'
import DocumentContextProvider, { DocumentContext } from '../contexts/DocumentContext'
import ContextTestConsumer from '../documents/scratch/ContextTestConsumer'


function Test1() {
    return (
        <div className="w-1/3">
            <DocumentContextProvider>
                <ContextTestConsumer/>
            </DocumentContextProvider>
        </div>
    )
}

export default Test1
