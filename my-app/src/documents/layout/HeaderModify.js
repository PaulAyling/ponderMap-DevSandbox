import BtnShowHide from '../furniture/buttons/Btn_showHide'
import BtnDragHandle from '../furniture/buttons/Btn_dragHandle'
import TitleEditor from './TitleEditor'
import TitleToolbar from '../furniture/TitleToolbar'

function HeaderModify(props) {
    //Content
    const { title, id } = props.curContainerData
    //Style Variables
    const { header_text,header_container } = props.curContainerData.Style_defaults
    return (
        <header title={title} className={header_container} >
        <div className='text-xs'>EDIT</div>
        <div title="Visit Site" className="flex flex-row flex-grow pl-2 justify-between">
            <div className='flex flex-row'>
                <BtnDragHandle 
                    containerFunctions = {props.containerFunctions} 
                    containerState = {props.containerState} 
                    containerData={props.curContainerData} />
                <TitleEditor 
                    curContainerData={props.curContainerData}/>
                <TitleToolbar 
                    containerFunctions =    {props.containerFunctions} 
                    containerState = {props.containerState} 
                    containerData={props.curContainerData} />
            </div>
            <BtnShowHide 
                containerFunctions = {props.containerFunctions} 
                containerState = {props.containerState}
/>
        </div>
    </header>
    )
}

export default HeaderModify
