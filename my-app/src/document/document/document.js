import React from 'react'
import DocumentBody from './documentBody'
import DocumentHeader from './documentHeader'
import DocumentFooter from './documentFooter'


function Document() {
   
    return (
        <div>
            <DocumentHeader/>
            <DocumentBody/>
            <DocumentFooter/>
        </div>
        
    )
}

export default Document
