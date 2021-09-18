import React from 'react'
import ShowHide_btn from './showHide_Btn'


function Container_header(props) {
    // Declare params
    const container_name = '_Chapter'
    const container_name_super = 'container'
    const container_outerStyle = 'flex flex-row justify-between p-2 bg-black text-white'
    const container_title = 'A Sample Title'
    // [container_name,container_name_super,container_outerStyle,container_title] = props
    // const element = <FontAwesomeIcon icon={faSortDown} />
    // rotate-180
    return (
        <header title={container_name} class={container_outerStyle} >
        <div class="flex flex-row">
            <div class="font-bold text-gray-200 text-left uppercase">_Chapter</div>
            <div class = "text-xs pl-3 text-gray-200">{container_name_super}</div>
        </div>
        <div title="title section " class="flex flex-row ">
            <div class="text-center font-extralight font-bold text-xl text-decoration: underline">
               { container_title } 
            </div>
            <ShowHide_btn/>
        </div>
    </header>
    )
}

export default Container_header
