import React from 'react'
import { allMockups } from '../../data/mockup/allMockups'
import {getCurDocIds, getCurDocMap, getCurComponents,getCurChildren} from '../../data/mockup/dataFunctions/main'
import { Btn_visable, Style_defaults } from './config'

import ContainerList from '../layout/ContainerList'

function Paragraph() {
    //create Document data
    const [users,documents,documentMaps,components] = allMockups

    //From Login
    const user = 1
      
    //From prop
    const docId = 1
    const curComponentId = 1
    //Document Data
    const docMap = documentMaps[docId]
    const componentIds = docMap.all_component_ids
    const docComponents = getCurComponents(componentIds,components)

    //Outputs
    const curComponent = docComponents[curComponentId]
    const curChildren = getCurChildren(curComponentId, docComponents, docMap )
  
      console.log('user:',user)
      console.log('docId:',docId)
      console.log('docMap:',docMap)
      console.log('componentIds:',componentIds)
      console.log('docComponents:',docComponents)

      const documentData = {
        docMap,
        docComponents
      }
    documentData.Btn_visible = Btn_visable[curComponent.container_name]
    documentData.Style_defaults = Style_defaults[curComponent.container_name]
    console.log('documentData:',documentData)
    return (
        <ContainerList curComponentId={curComponentId} documentData={documentData}
        />
    )
}

export default Paragraph
