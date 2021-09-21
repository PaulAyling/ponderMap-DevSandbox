import BtnShowHide from '../furniture/buttons/Btn_showHide'
import BtnDragHandle from '../furniture/buttons/Btn_dragHandle'

function Header(props) {
    //Tidy up
    const container_name = props.container_presets.container_name
    const container_outerStyle = props.container_presets.container_outerStyle
    const container_title =  props.container_presets.container_title

    return (
        <header title={container_name} className={container_outerStyle} >
        <div title="Visit Site" className="flex flex-row flex-grow pl-2 justify-between">
            <div>
                <BtnDragHandle containerFunctions = {props.containerFunctions}/>
                <div className="text-center font-extralight font-bold text-xl text-decoration: underline">
                {container_title } 
                </div>
            </div>
            <BtnShowHide containerFunctions = {props.containerFunctions} containerState = {props.containerState}
/>
        </div>
    </header>
    )
}

export default Header
