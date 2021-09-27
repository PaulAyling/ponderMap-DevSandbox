import BtnShowHide from '../furniture/buttons/Btn_showHide'
import BtnDragHandle from '../furniture/buttons/Btn_dragHandle'
import BtnAdd from '../furniture/buttons/Btn_add'
import BtnDelete from '../furniture/buttons/Btn_delete'
import BtnUrl from '../furniture/buttons/Btn_url'
import BtnShare from '../furniture/buttons/Btn_share'
import { ExternalLink } from 'react-external-link'; 


function Header(props) {
    //Content
    const { url, title, } = props.curContainerData
    //Style Variables
    const { header_text,header_container } = props.curContainerData.Style_defaults

    return (
        <header title={title} className={header_container} >
        <div title="Visit Site" className="flex flex-row flex-grow pl-2 justify-between">
            <div className='flex flex-row'>
                <BtnDragHandle containerFunctions = {props.containerFunctions} containerState = {props.containerState} containerData={props.curContainerData} />

                <ExternalLink className={header_text} href={url}>
                    <span>{title} </span>
                </ExternalLink>

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
