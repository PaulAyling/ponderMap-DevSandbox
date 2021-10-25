import  { useState, useContext, useEffect } from 'react'
import { DocumentContext } from '../../contexts/DocumentContext'
import { getComponent } from '../../data/dataFunctions/render'




import HeaderModify from './HeaderModify'
import Header from './Header'
import Body from '../layout/Body'
import { Btn_visable, Style_defaults } from '../components/config'
import { getCurLevel} from '../../data/dataFunctions/render'

function Container(prop) {

    useEffect(() => {

    }, []);



    // console.log('container prop.id ',prop.curComponentId)
//1. DATA FOR THIS COMPONENT
    const {documentComponents, documentView,userId} =  useContext(DocumentContext);
    //Create data for this component
    // const curContainerData = documentComponents[prop.curComponentId]
    const curContainerData = getComponent(prop.curComponentId,userId,documentComponents)
    const curComponentLevel = getCurLevel(curContainerData.id,documentView)
    //Add styling abnd button present for this curComponentLevel
    curContainerData.Btn_visible = Btn_visable[curComponentLevel]
    curContainerData.Style_defaults = Style_defaults[curComponentLevel]
//2. SETUP STATE & STATE FUNCTION FOR BUTTON TOGGLES
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

// 3. Style Variables
    const { container_outerStyle } = curContainerData.Style_defaults
// togle Edit
    const edit = true
    return (
        <article className={container_outerStyle}>
            {edit ?
            <HeaderModify
            curContainerData={curContainerData}
            //Button Management
            containerFunctions = {containerFunctions}
            containerState = {containerState}
            showHide = {showHide}
            /> :
            <Header
            curContainerData={curContainerData}
            //Button Management
            containerFunctions = {containerFunctions}
            containerState = {containerState}
            showHide = {showHide}
            />}
            {showHide ?  
            <Body   
                    curContainerData={curContainerData} 
                    containerFunctions = {containerFunctions}
                    //Document data
                    documentComponents = {documentComponents}
                    documentView={documentView}/> : '' }
        </article>
    )
}
export default Container
/* The Document Structure works like this
<container>
    <header/>   {title / links live here}
    <Body>      {children live here or if at bottom optional images and notes}
        <Contianer>
            <Header/>
            <Body>
                <Container>
                    <Header/>
                    <Body>
                        <Container>
                            <Header/>
                            <Body>
                                <Container/>
                                <Body/> (images and notes)
                            </Body>
                    </Body>
            </Body>
        </Container>
    </Body>
</container>    */
