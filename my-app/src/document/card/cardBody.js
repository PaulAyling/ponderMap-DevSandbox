import { v4 as uuidv4 } from 'uuid';
import Card from './card'


function CardBody(props) {
    console.log('childrensIds',props.childrensIds)
    const image_style = {
        backgroundImage: 'url('+ props.cardContent.imageUrl +')' 
      }
      console.log('image_style',image_style)
      const ChildList = props.childrensIds.map(function(component){
        return (
        <Card id={component} key={uuidv4()}/>
        )
        })
    return (
        <div key={uuidv4()}>
        <div className={''}>
            {/* <Tags  tags={all_tags}/> */}
            <div className = "h-60 bg-scroll bg-no-repeat bg-auto bg-center" style={image_style}></div>
            <div className="p-2">
            {props.cardContent.notes}
            </div>
        </div>
        {ChildList}
    </div>
    )

}
export default CardBody
