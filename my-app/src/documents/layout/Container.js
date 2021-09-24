import  { useState }from 'react'
import Header from '../layout/Header'
import Body from '../layout/Body'
import { Btn_visable, Style_defaults } from '../components/config'
import { getCurLevel} from '../../data/dataFunctions/render'

//THIS IS THE CONTAINER FOR THE HEADER/BODY of each link 
//with buttons


function Container(props) {
    const containerData = props.container_data
    const curComponentLevel = getCurLevel(containerData.id,props.documentView)
    //Add button defaults
    containerData.Btn_visible = Btn_visable[curComponentLevel]
    containerData.Style_defaults = Style_defaults[curComponentLevel]

    //SETUP STATE & STATE FUNCTION FOR BUTTON TOGGLES
    const [showHide, setshowHide] = useState(false);
    const [showDrag, setShowDrag] = useState(false);
    const showHide_tgl = (prop) => {
        setshowHide(prevState => !prevState);
      }
    const showDrag_tgl = (prop) => {
        setShowDrag(prevState => !prevState);
      }
    const containerFunctions = {
        'showHide_tgl':showHide_tgl,
        'showDrag_tgl':showDrag_tgl
    }
    const containerState ={
        showHide,
        showDrag
    }

    return (
        <article className='m-1 bg-gray-300'>
            <Header
            containerData={containerData}
            showHide = {showHide}
            containerFunctions = {containerFunctions}
            containerState = {containerState}
            />
            {showHide ?  <Body containerData={containerData} /> : '' }
        </article>
    )
}

export default Container
