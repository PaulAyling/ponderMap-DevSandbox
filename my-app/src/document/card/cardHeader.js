import { v4 as uuidv4 } from 'uuid';
import BtnDragHandle from '../furniture/buttons/Btn_dragHandle'
import CardTitle from './cardTitle'
import TitleToolbar from '../furniture/TitleToolbar';
import BtnShowHide from '../furniture/buttons/Btn_showHide'
 
const CardHeader = (props) => {
    return (
        <div title={'header ID:'+props.id} className={props.cardSettings.cardStyles.cardHeaderContainer} key={uuidv4()}>
            <div title="hyperlink details" className="rounded-3 flex flex-row flex-grow pl-2 justify-between">
                <BtnDragHandle
                    id={props.id}
                    cardState={props.cardState}
                    cardSettings={props.cardSettings}
                />
                <CardTitle 
                id={props.id}
                cardContent={props.cardContent}
                />
                <TitleToolbar
                    id={props.id}
                    cardState={props.cardState}
                    cardSettings={props.cardSettings}/>
            </div>
            <BtnShowHide
                cardState={props.cardState}
            />

        </div>
    )
    };
  export default CardHeader

