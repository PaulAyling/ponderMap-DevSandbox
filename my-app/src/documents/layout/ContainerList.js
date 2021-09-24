import {getCurDocIds, getCurDocMap, getCurComponents,getChildrenComponents, getCurLevel} from '../../data/dataFunctions/render'
import ChildEx from '../scratch/ChildEx'
import Container from '../layout/Container'


function ContainerList(props) {
    const componentId = props.curComponentId
    const components = props.singleDocument.docComponents
    const documentView = props.singleDocument.documentView
    //OUTPUT DATA
    const outer_style_container_list = 'outer_style_container_list'
    const curComponent = props.singleDocument.docComponents[props.curComponentId]
    const curChildren = getChildrenComponents(componentId, components, documentView) 
    console.log('curComponent',curComponent)
    console.log('curChildren',curChildren)
        
    const childList = curChildren.map(function(curChilds){
        return <ChildEx key={curChilds.id} data={curChilds} />;
      })

      
    return (
        <section className={'outer_style_container_list'}>
            <Container container_data={curComponent}/>
            <div>{childList}</div>
        </section>
    )
}

export default ContainerList
