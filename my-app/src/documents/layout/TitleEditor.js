import React from 'react'
import { ExternalLink } from 'react-external-link'; 

import { useContext } from 'react/cjs/react.development'
import { getComponent } from '../../data/dataFunctions/render'
import { DocumentContext } from '.././../contexts/DocumentContext'

function TitleEditor(props) {
    const {documentComponents, userId} =  useContext(DocumentContext);
    const curComponent = getComponent(props.id,userId,documentComponents)
    const {title, url, header_text} = curComponent
    return (
        <ExternalLink className={header_text} href={url}>
            <span>{title} </span>
        </ExternalLink>
    )
}

export default TitleEditor
