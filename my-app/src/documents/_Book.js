import React from 'react'
import Header from '../documents/layout/Header'

function _Book() {
    const container_presets = {
        'container_name':'_Chapter',  
        'container_name_super':'container',    
        'container_outerStyle':'flex flex-row justify-between p-2 bg-black text-white',
        'btn_add_child':false}
    return (
        <Header
        container_presets={container_presets}
        />
        
    )
}

export default _Book
