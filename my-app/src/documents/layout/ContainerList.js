import {getCurDocIds, getCurDocMap, getCurComponents,getChildrenComponents, getCurLevel} from '../../data/dataFunctions/render'
import ChildEx from '../scratch/ChildEx'
import Container from '../layout/Container'
import { Btn_visable, Style_defaults } from '../components/config'



function ContainerList(props) {
    const componentId = props.curComponentId
    const components = props.singleDocument.docComponents
    const documentView = props.singleDocument.documentView
    const curComponentLevel = getCurLevel(componentId,documentView)
    console.log('curComponentLevel',curComponentLevel)

    //PROP DATA
    const outer_style_container_list = 'outer_style_container_list'
    const curComponent = props.singleDocument.docComponents[componentId]
    console.log('curComponent',curComponent)
    const curChildren = getChildrenComponents(componentId, components, documentView) 


    //Add Button Defaults
    curComponent.Btn_visible = Btn_visable[curComponentLevel]
    curComponent.Style_defaults = Style_defaults[curComponentLevel]
    console.log('curComponent.container_name',curComponent)

    const childList = curChildren.map(function(curChilds){
        return <ChildEx key={curChilds.id} data={curChilds} />;
      })

      
    return (
        <section className={'outer_style_container_list'}>
            {/* <Container container_data={curComponent}/> */}
            <div>{childList}</div>
        </section>
    )
}

export default ContainerList
