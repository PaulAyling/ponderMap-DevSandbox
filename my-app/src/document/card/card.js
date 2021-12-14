import  { useState, useContext, useEffect } from 'react'
import 

function Card(prop) {
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
        <article className={container_outerStyle} key={uuidv4()}>
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
export default Card
