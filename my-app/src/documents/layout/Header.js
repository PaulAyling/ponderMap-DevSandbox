import BtnShowHide from '../furniture/buttons/Btn_showHide'
import BtnDragHandle from '../furniture/buttons/Btn_dragHandle'
import BtnAdd from '../furniture/buttons/Btn_add'
import BtnDelete from '../furniture/buttons/Btn_delete'
import BtnUrl from '../furniture/buttons/Btn_url'
import BtnShare from '../furniture/buttons/Btn_share'

function Header(props) {
    const container_name = props.curContainerData.container_name
    const container_title =  props.curContainerData.title

    //Style Variables
    const { header_text,header_container } = props.curContainerData.Style_defaults

    return (
        <header title={container_name} className={header_container} >
        <div title="Visit Site" className="flex flex-row flex-grow pl-2 justify-between">
            <div className='flex flex-row'>
                <BtnDragHandle containerFunctions = {props.containerFunctions} containerState = {props.containerState} containerData={props.curContainerData} />
                <div className={header_text}>
                {container_title } 
                </div>
                <BtnAdd containerFunctions =    {props.containerFunctions} containerState = {props.containerState} containerData={props.curContainerData} />
                <BtnDelete containerFunctions = {props.containerFunctions} containerState = {props.containerState} containerData={props.curContainerData} />
                <BtnUrl containerFunctions =    {props.containerFunctions} containerState = {props.containerState} containerData={props.curContainerData} />
                <BtnShare containerFunctions =  {props.containerFunctions} containerState = {props.containerState} containerData={props.curContainerData} />
            </div>
            <BtnShowHide containerFunctions = {props.containerFunctions} containerState = {props.containerState}
/>
        </div>
    </header>
    )
}

export default Header
