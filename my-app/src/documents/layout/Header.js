import React from 'react'
import BtnShowHide from '../furniture/buttons/Btn_showHide'

function Header(props) {
    //Tidy up
    const container_name = props.container_presets.container_name
    const container_outerStyle = props.container_presets.container_outerStyle
    const container_title =  props.container_presets.container_title

    return (
        <header title={container_name} className={container_outerStyle} >
        <div title="drag handle">

        </div>
        <div title="Visit Site" className="flex flex-row flex-grow pl-2 justify-between">
            <div className="text-center font-extralight font-bold text-xl text-decoration: underline">
               {container_title } 
            </div>
            <BtnShowHide togle_var = {props.togle_var} showHide = {props.showHide}/>
        </div>
    </header>
    )
}

export default Header
