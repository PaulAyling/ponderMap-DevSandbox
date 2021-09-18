import React from 'react'
import Container_header from '../sub_parts/container_header'



function _Book() {
    // Declare params
    const container_name = '_Chapter'
    const container_name_super = 'container'
    const container_outerStyle = 'flex flex-row justify-between p-2 bg-black text-white'
    const container_title = 'A Sample Title'
    return (
        <Container_header
        container_name = {container_name}
        container_name_super = {container_name_super}
        container_outerStyle = {container_outerStyle}
        container_title = {container_title}
        />
        
    )
}

export default _Book
