import React from 'react'
import { getCurLevel,getChildrenComponents} from '../../data/dataFunctions/render'
import Tags from '../furniture//tags'
import Container from '../layout/Container'



function Body(props) {
    //1. Content (If level = word)
    const {id, notes, image_url, bodyOuterStyle,all_tags}  = props.curContainerData
    console.log('BODY: props.curContainerData',props.curContainerData)
    const curComponentLevel = getCurLevel(props.curContainerData.id,props.documentView)
    const image_style = {
        backgroundImage: 'url('+ image_url +')' 
      }

    //2. Content if the container has children
    const documentComponents = props.documentComponents
    const documentView = props.documentView
    const curChildren = getChildrenComponents(id, documentComponents, documentView) 
    
    const childList = curChildren.map(function(curChilds){
        return (
        <Container 
        //Container Specific
        key={curChilds.id} 
        curComponentId={curChilds.id} 
        />
        )
        })
    return (
    <div>{curComponentLevel === 'word' ?
        <div className={bodyOuterStyle}>
            <Tags  tags={all_tags}/>
            <div className = "h-60 bg-scroll bg-no-repeat bg-auto bg-center" style={image_style}></div>
            <div className="p-2">
            {notes}
            </div>
        </div>
        :
        <div>{childList}</div>
}
        

    </div>
        
    )
}

export default Body
