import BtnAdd from './buttons/Btn_add'
import BtnDelete from './buttons/Btn_delete'
import BtnUrl from './buttons/Btn_url'
import BtnShare from './buttons/Btn_share'

function TitleToolbar(props) {
    const { containerFunctions, containerState,containerData  } = props
    return (
        <div>
            <BtnAdd containerFunctions =    {containerFunctions} containerState = {containerState} containerData={containerData} />
            <BtnDelete containerFunctions = {containerFunctions} containerState = {containerState} containerData={containerData} />
            <BtnUrl containerFunctions =    {containerFunctions} containerState = {containerState} containerData={containerData} />
            <BtnShare containerFunctions =  {containerFunctions} containerState = {containerState} containerData={containerData} />
        </div>
        
    )
}

export default TitleToolbar
