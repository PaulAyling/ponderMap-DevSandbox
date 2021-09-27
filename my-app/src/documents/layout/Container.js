import  { useState }from 'react'
import Header from '../layout/Header'
import Body from '../layout/Body'
import { Btn_visable, Style_defaults } from '../components/config'
import { getCurLevel,getChildrenComponents} from '../../data/dataFunctions/render'


//THIS IS THE CONTAINER FOR THE HEADER/BODY of each link 
//with buttons


function Container(props) {
    //1. DATA FOR THIS COMPONENT
        //Pull Sample document
        const {documentComponents, documentView} = props.singleDocument 
        //Create data for this component
        const curContainerData = documentComponents[props.curComponentId]
        const curComponentLevel = getCurLevel(curContainerData.id,documentView)
        curContainerData.Btn_visible = Btn_visable[curComponentLevel]
        curContainerData.Style_defaults = Style_defaults[curComponentLevel]


    //3. SETUP STATE & STATE FUNCTION FOR BUTTON TOGGLES
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
            curContainerData={curContainerData}
            showHide = {showHide}
            containerFunctions = {containerFunctions}
            containerState = {containerState}
            />
           
            {showHide ?  
            <Body   
                    containerFunctions = {containerFunctions}
                    curContainerData={curContainerData} 
                    components = {documentComponents}
                    documentView={documentView}/> : '' }
        </article>
    )
}

export default Container
