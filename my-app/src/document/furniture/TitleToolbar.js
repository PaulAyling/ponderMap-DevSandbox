import BtnAdd from './buttons/Btn_add'
import BtnDelete from './buttons/Btn_delete'
import BtnUrl from './buttons/Btn_url'
import BtnShare from './buttons/Btn_share'

function TitleToolbar(props) {
    return (
        <div>
            {/* BUTTONS HAVE NO CAPABILITY YET APART FROM APPEARING AS PER CONFIG */}
            <BtnAdd cardSettings={props.cardSettings}/>
            <BtnDelete cardSettings={props.cardSettings}/>
            <BtnUrl cardSettings={props.cardSettings} />
            <BtnShare cardSettings={props.cardSettings}/> 
        </div>  
    )
}

export default TitleToolbar
