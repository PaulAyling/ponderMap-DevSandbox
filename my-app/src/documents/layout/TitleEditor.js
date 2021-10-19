import React from 'react'
import { ExternalLink } from 'react-external-link'; 
import InputForm from './InputForm';


function TitleEditor(props) {
    const {title, url, header_text} = props
    return (
        <ExternalLink className={header_text} href={url}>
            <span>{title} </span>
        </ExternalLink>
    )
}

export default TitleEditor
