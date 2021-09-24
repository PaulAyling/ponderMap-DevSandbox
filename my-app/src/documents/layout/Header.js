import BtnShowHide from '../furniture/buttons/Btn_showHide'
import BtnDragHandle from '../furniture/buttons/Btn_dragHandle'
import BtnAdd from '../furniture/buttons/Btn_add'
import BtnDelete from '../furniture/buttons/Btn_delete'
import BtnUrl from '../furniture/buttons/Btn_url'
import BtnShare from '../furniture/buttons/Btn_share'

function Header(props) {
    const container_name = props.container_data.container_name
    const container_outerStyle = 'props.container_data.Style_defaults.container_outerStyle'
    const container_title =  props.container_data.container_title

    return (
        <header title={container_name} className={container_outerStyle} >
        <div title="Visit Site" className="flex flex-row flex-grow pl-2 justify-between">
            <div className='flex flex-row'>
                <BtnDragHandle containerFunctions = {props.containerFunctions} containerState = {props.containerState} container_data={props.container_data} />
                <div className="text-center font-extralight font-bold text-xl text-decoration: underline">
                {container_title } 
                </div>
                <BtnAdd containerFunctions =    {props.containerFunctions} containerState = {props.containerState} container_data={props.container_data} />
                <BtnDelete containerFunctions = {props.containerFunctions} containerState = {props.containerState} container_data={props.container_data} />
                <BtnUrl containerFunctions =    {props.containerFunctions} containerState = {props.containerState} container_data={props.container_data} />
                <BtnShare containerFunctions =  {props.containerFunctions} containerState = {props.containerState} container_data={props.container_data} />
            </div>
            <BtnShowHide containerFunctions = {props.containerFunctions} containerState = {props.containerState}
/>
        </div>
    </header>
    )
}

export default Header
