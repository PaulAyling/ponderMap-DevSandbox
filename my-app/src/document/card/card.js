import  { useContext,useState  } from 'react'
import { DocumentContext } from '../../contexts/DocumentContext'
import CardHeader from './cardHeader'
import { v4 as uuidv4 } from 'uuid';
import { getUsersViewId } from '../../data/functions/utils/utils';
import { getComponent } from '../../data/functions/display/display'

const Card= (props)=> {
    //1. SETUP CARD STATE   (BUTTON TOGGLES)
        const [showHide, setshowHide] = useState(false);
        const [showDrag, setShowDrag] = useState(false);
        const showHide_fn_tgl = (prop) => {
            setshowHide(prevState => !prevState);
        }
        const showDrag_fn_tgl = (prop) => {
            setShowDrag(prevState => !prevState);
        }
        const cardState = {
            showHide,
            showHide_fn_tgl,
            showDrag,
            showDrag_fn_tgl
        }
    //2. GET STYLE DATA
        const documentContext = useContext(DocumentContext)
        const usersViewId = getUsersViewId(documentContext)
        const level = documentContext.document.documentViews[usersViewId].componentHierachy[props.id].level
        const cardSettings = {
            'cardStyles':documentContext.settings.styleDefaults[level],
            'cardButtonsVisable':documentContext.settings.buttonsVisable[level],
        }
    //3, GET CONTENT
        const cardContent = getComponent(props.id,documentContext)
        return (
        <article title={'card ID: '+props.id}className = {cardSettings.cardStyles.cardContainer} key={uuidv4()} >
            <CardHeader 
                id={props.id}
                cardState={cardState}
                cardSettings={cardSettings}
                cardContent={cardContent}
            />
        </article>
        )
  }

  export default Card


