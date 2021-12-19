import { v4 as uuidv4 } from 'uuid';
import BtnDragHandle from '../furniture/buttons/Btn_dragHandle'
import CardTitle from './cardTitle'
 
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
                <div>2</div>
            </div>
        </div>
    )
    };
  export default CardHeader

