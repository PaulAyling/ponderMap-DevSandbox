import React from 'react'
import { singleDocument } from '../../data/mockup/singleDocument'
// import ContainerList from '../layout/ContainerList'
import Container from '../layout/Container'


function Paragraph() {
    const curComponentId=1
    return (
        <Container curComponentId={curComponentId} singleDocument={singleDocument}
        />
    )
}

export default Paragraph
