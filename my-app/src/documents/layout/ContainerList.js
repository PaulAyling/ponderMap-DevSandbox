import React from 'react'
import ChildEx from '../scratch/ChildEx'
import {getCurDocIds, getCurDocMap, getCurComponents,getCurChildren} from '../../data/mockup/dataFunctions/render'
import { Btn_visable, Style_defaults } from '../components/config'

function ContainerList(props) {
    //Prepare data
    const curComponent = props.documentData.docComponents[props.curComponentId]
    const curChildren = getCurChildren(props.curComponentId, props.documentData.docComponents, props.documentData.docMap )
    // console.log('curComponent',curComponent)
    // console.log('curChildren',curChildren)
    // console.log('style',props.documentData)
    
        
    //Create Childist
    var childList = curChildren.map(function(curChilds){
        return <ChildEx key={curChilds.id} data={curChilds} />;
      })

      
    return (
        <section className={'outer_style_container_list'}>
            header section of container list
            <div>{childList}</div>
        </section>
    )
}

export default ContainerList
