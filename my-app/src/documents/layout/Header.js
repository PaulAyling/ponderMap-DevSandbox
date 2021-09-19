import React from 'react'
import BtnShowHide from '../furniture/buttons/Btn_showHide'

function Header(props) {
    //Tidy up
    const container_name = props.container_presets.container_name
    const container_name_super = props.container_presets.container_name_super
    const container_outerStyle = props.container_presets.container_outerStyle
    const container_title =  props.container_presets.container_title

    return (
        <header title={container_name} className={container_outerStyle} >
        <div className="flex flex-row">
            <div className="font-bold text-gray-200 text-left text-xs uppercase">{container_name}</div>
            {/* <div className = "text-xs pl-3 text-gray-200">{container_name_super}</div> */}
        </div>
        <div title="title section " className="flex flex-row ">
            <div className="text-center font-extralight font-bold text-xl text-decoration: underline">
               {container_title } 
            </div>
            <BtnShowHide show_hide = {props.show_hide} togl = {props.togl}/>
        </div>
    </header>
    )
}

export default Header
