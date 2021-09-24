import {getCurDocIds, getCurDocMap, getCurComponents,getChildrenComponents, getCurLevel} from '../../data/dataFunctions/render'
import ChildEx from '../scratch/ChildEx'
import Container from '../layout/Container'


function ContainerList(props) {
    const componentId = props.curComponentId
    const components = props.singleDocument.docComponents
    const documentView = props.singleDocument.documentView

    //THIS LEVELS DATA
    const containerData = components[componentId]

    //CHILDREN DATA
    const curChildren = getChildrenComponents(componentId, components, documentView) 
    const childList = curChildren.map(function(curChilds){
        return (
        <Container 
        //Container Specific
        key={curChilds.id} container_data={curChilds} 
        //All Doc data
        components={components} documentView={documentView}/>
        )
      })
 
    return (
        <section className={'outer_style_container_list'}>
        <Container 
        //Container Specific
        key={componentId} container_data={containerData} 
        //All Doc data
        components={components} documentView={documentView}/>
            <div>{childList}</div>
        </section>
    )
}

export default ContainerList
