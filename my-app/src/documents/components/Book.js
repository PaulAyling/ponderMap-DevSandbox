import React from 'react'
import Container from '../layout/Container'
import { Btn_visable, Style_defaults } from '../components/config'

function Book() {
    const container_data = {
        //Content
        'container_name':'chapter',  
        'container_title':'Placeholder Title',
        'container_url':'https://loremflickr.com/640/360',
        'container_notes':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        'container_image':'https://picsum.photos/800',
        //Style
        'container_outerStyle':'flex flex-row justify-between p-2 bg-black text-white',
        //Settings
        'Btn_visable':Btn_visable.chapter,
        'Style_defaults':Style_defaults.chapter
    }
    return (
        <Container
        container_data={container_data}
        />
        
    )
}

export default Book
