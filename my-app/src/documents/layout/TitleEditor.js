import React from 'react'
import { ExternalLink } from 'react-external-link'; 

import { useContext } from 'react/cjs/react.development'
import { getComponent } from '../../data/dataFunctions/render'
import { DocumentContext } from '.././../contexts/DocumentContext'

function TitleEditor(props) {
    const {title, url, header_text} = props.curContainerData
    // console.log(props.curContainerData)
    return (
        <ExternalLink className={header_text} href={url}>
            <span>{title} </span>
        </ExternalLink>
    )
}

export default TitleEditor
