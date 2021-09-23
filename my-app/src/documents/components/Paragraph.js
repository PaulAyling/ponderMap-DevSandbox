import React from 'react'
import { singleDocument } from '../../data/mockup/singleDocument'
import ContainerList from '../layout/ContainerList'


function Paragraph() {
    const curComponentId=1
    return (
        <ContainerList curComponentId={curComponentId} singleDocument={singleDocument}
        />
    )
}

export default Paragraph
