import  { useContext,useState  } from 'react'
import { DocumentContext } from '../../contexts/DocumentContext'
import CardHeader from './cardHeader'
import { v4 as uuidv4 } from 'uuid';

/*  OVERALL APP PLAN
    Main components:
    Document, 
        Card 
            CardHeader
            CardBody
            CardChildren  -> ....Card

    Example:
    Document            {startingId}
        Card (A)
            CardHeader      {link and title are edited}
            CardBody        {notes & image}
                CardChildren    {the children ids are genreated and looped accroos as many cards as required}
                    Card (B1)     
                    Card (B2)
                    Card (B3) 
*/










 
const Card= (props)=> {
    //1. SETUP CARD STATE   (BUTTON TOGGLES)
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
    //2. GET ALL DOCUMENT DATA
    const document = useContext(DocumentContext)
        // Get the component level
        // Get the component style



        //Style Variables
        console.log(document.document)
        const style = document.settings.styleDefaults['paragraph']
        return (
        <article className={style.container_outerStyle} key={uuidv4()}>
                <CardHeader
                id={props.id}
                //Button Management
                containerFunctions = {containerFunctions}
                containerState = {containerState}
                showHide = {showHide}
                />
                {/* {showHide ?  
                <Body   
                        curContainerData={curContainerData} 
                        containerFunctions = {containerFunctions}
                        //Document data
                        documentComponents = {documentComponents}
                        documentView={documentView}/> : '' } */}
            </article>
        )

  }

  export default Card


