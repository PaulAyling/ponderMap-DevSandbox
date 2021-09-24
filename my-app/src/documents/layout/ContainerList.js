import {getCurDocIds, getCurDocMap, getCurComponents,getChildrenComponents, getCurLevel} from '../../data/dataFunctions/render'
import ChildEx from '../scratch/ChildEx'


function ContainerList(props) {
    const componentId = props.curComponentId
    const components = props.singleDocument.docComponents
    const documentView = props.singleDocument.documentView
    //OUTPUT DATA
    const outer_style_container_list = 'outer_style_container_list'
    const curComponent = props.singleDocument.docComponents[props.curComponentId]
    const curChildren = getChildrenComponents(componentId, components, documentView) 

        
    const childList = curChildren.map(function(curChilds){
        return <ChildEx key={curChilds.id} data={curChilds} />;
      })

      
    return (
        <section className={'outer_style_container_list'}>
            <div>{childList}</div>
        </section>
    )
}

export default ContainerList
