import React from 'react'
import { ExternalLink } from 'react-external-link'; 
import InputForm from '../layout/InputForm'

function TitleEditor(props) {
    const { url, header_text} = props.curContainerData
    return (
        <ExternalLink className={header_text} href={url}>
            <InputForm curContainerData={props.curContainerData} />
        </ExternalLink>
    )
}

export default TitleEditor
