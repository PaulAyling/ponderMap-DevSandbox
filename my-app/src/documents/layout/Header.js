import React from 'react'
import BtnShowHide from '../furniture/buttons/Btn_showHide'

function Header(props) {
    //Tidy up
    const container_name = props.container_presets.container_name
    const container_outerStyle = props.container_presets.container_outerStyle
    const container_title =  props.container_presets.container_title

    return (
        <header title={container_name} className={container_outerStyle} >
        {/* <div className="flex flex-row">
            <div className="font-bold text-gray-600 text-left text-xs uppercase">{container_name}</div>
        </div> */}
        <div title="Visit Site" className="flex flex-row flex-grow pl-2 justify-between">
            <div className="text-center font-extralight font-bold text-xl text-decoration: underline">
               {container_title } 
            </div>
            <BtnShowHide show_hide = {props.show_hide} togl = {props.togl}/>
        </div>
    </header>
    )
}

export default Header
