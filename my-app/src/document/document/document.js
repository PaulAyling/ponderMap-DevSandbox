import React from 'react'
import DocumentBody from './documentBody'
import DocumentHeader from './documentHeader'
import DocumentFooter from './documentFooter'


function Document() {
    const startingId = 1
    return (
        <div>
            <DocumentHeader/>
            <DocumentBody startingId={startingId}/>
            <DocumentFooter/>
        </div>
        
    )
}

export default Document
