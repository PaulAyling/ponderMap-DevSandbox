import BtnShowHide from '../furniture/buttons/Btn_showHide'
import BtnDragHandle from '../furniture/buttons/Btn_dragHandle'
import BtnAdd from '../furniture/buttons/Btn_add'
import BtnDelete from '../furniture/buttons/Btn_delete'
import BtnUrl from '../furniture/buttons/Btn_url'
import BtnShare from '../furniture/buttons/Btn_share'

function Header(props) {
    console.log('ZZ:containerData',props.containerData.Style_defaults.container_outerStyle)

    const container_name = props.containerData.container_name
    const headerOuterStyle = props.containerData.Style_defaults.header_outerStyle
    const container_title =  props.containerData.title

    return (
        <header title={container_name} className={headerOuterStyle} >
        <div title="Visit Site" className="flex flex-row flex-grow pl-2 justify-between">
            <div className='flex flex-row'>
                <BtnDragHandle containerFunctions = {props.containerFunctions} containerState = {props.containerState} containerData={props.containerData} />
                <div className="text-center font-extralight font-bold text-xl text-decoration: underline">
                {container_title } 
                </div>
                <BtnAdd containerFunctions =    {props.containerFunctions} containerState = {props.containerState} containerData={props.containerData} />
                <BtnDelete containerFunctions = {props.containerFunctions} containerState = {props.containerState} containerData={props.containerData} />
                <BtnUrl containerFunctions =    {props.containerFunctions} containerState = {props.containerState} containerData={props.containerData} />
                <BtnShare containerFunctions =  {props.containerFunctions} containerState = {props.containerState} containerData={props.containerData} />
            </div>
            <BtnShowHide containerFunctions = {props.containerFunctions} containerState = {props.containerState}
/>
        </div>
    </header>
    )
}

export default Header
