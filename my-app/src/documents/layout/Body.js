import React from 'react'
import { getCurLevel,getChildrenComponents} from '../../data/dataFunctions/render'
import Container from '../layout/Container'

function Body(props) {
    //1. Content (If level = word)
    const [containerId, container_notes, container_image, bodyOuterStyle]  = props.curContainerData
    const curComponentLevel = getCurLevel(props.curContainerData.id,props.documentView)
    const image_style = {
        backgroundImage: 'url('+ container_image +')' 
      }

    //2. Content if the container has children
    const components = props.components
    const documentView = props.documentView



    // const curChildren = getChildrenComponents(props.containerData.id, props.components, props.documentView) 
    // const childList = curChildren.map(function(curChilds){
    //     return (
    //     <Container 
    //     //Container Specific
    //     key={curChilds.id} container_data={curChilds} 
    //     //All Doc data
    //     components={props.components} documentView={props.documentView}/>
    //     )
    //     })

    return (
    <div>{curComponentLevel == 'word' ?
        <div className={bodyOuterStyle}>
            <div className = "h-80 bg-cover" style={image_style}></div>
            <div className="p-2">
            {container_notes}
            </div>
        </div>
        :
        <div>not word</div>
}
        

    </div>
        
    )
}

export default Body
