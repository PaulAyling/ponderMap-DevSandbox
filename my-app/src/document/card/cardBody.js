import { v4 as uuidv4 } from 'uuid';
import Card from './card'
import Tags from '../furniture/tags'

function CardBody(props) {
    const image_style = {
        backgroundImage: 'url('+ props.cardContent.imageUrl +')' 
      }
      const ChildList = props.childrensIds.map(function(component){
        return (
        <Card id={component} key={uuidv4()}/>
        )
        })
    return (
        <div key={uuidv4()}>
        <div className=''>
            <Tags  tags={props.cardContent.allTags}/>
            <div class='flex-col'>

            <div className = " p-2 h-96 w-96 bg-center bg-scroll bg-no-repeat bg-auto" style={image_style}></div>
            </div>
            {/* <div className = "bg-scroll bg-no-repeat bg-auto" style={image_style}></div> */}

            <div className="p-2">
            {props.cardContent.notes}
            </div>
        </div>
        {ChildList}
    </div>
    )

}
export default CardBody
