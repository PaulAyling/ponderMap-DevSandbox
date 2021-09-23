import React from 'react'
import { singleDocument } from '../../data/mockup/singleDocument'
import {getCurDocIds, getCurDocMap, getCurComponents,getCurChildren} from '../../data/mockup/dataFunctions/render'
import { Btn_visable, Style_defaults } from './config'


function Paragraph() {
    console.log(singleDocument)

    // //Outputs
    // const curComponent = docComponents[curComponentId]
    // const curChildren = getCurChildren(curComponentId, docComponents, docMap )
    // const documentData = {
    //   docMap,
    //   docComponents
    // }
    // documentData.Btn_visible = Btn_visable[curComponent.container_name]
    // documentData.Style_defaults = Style_defaults[curComponent.container_name]
    // console.log('documentData:',documentData)
    return (
        // <ContainerList curComponentId={curComponentId} documentData={documentData}
        // />
        <div>placholder</div>
    )
}

export default Paragraph
