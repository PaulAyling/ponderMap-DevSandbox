import  { useContext,useState  } from 'react'
import { DocumentContext } from '../../contexts/DocumentContext'
import CardHeader from './cardHeader'
import { v4 as uuidv4 } from 'uuid';
import { getUsersViewId } from '../../data/functions/utils/utils';

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
        const cardStyles = documentContext.settings.styleDefaults[level]
        return (
        <article className = {cardStyles.cardContainer} key={uuidv4()} >
            <CardHeader 
                id={props.id}
                cardState={cardState}
                cardStyles={cardStyles}
            />
        </article>
        )

  }

  export default Card


