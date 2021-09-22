import React from 'react'
import Container from '../layout/Container'
import { Btn_visable, Style_defaults } from '../components/config'

function Chapter() {
    // This will have to render out all the children of this chapter
    const container_data = {
        //Content
        'container_name':'Page',  
        'container_title':'Column Title',
        'container_url':'https://loremflickr.com/640/360',
        'container_notes':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        'container_image':'https://picsum.photos/800',
    }
    //Add defaults
    container_data.Btn_visible = Btn_visable[container_data.container_name]
    container_data.Style_defaults = Style_defaults[container_data.container_name]
    return (
        <Container
        container_data={container_data}
        />
        // Render out chilren here
        
    )
}

export default Chapter
