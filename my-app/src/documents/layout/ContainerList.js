import {getCurDocIds, getCurDocMap, getCurComponents,getChildrenComponents, getCurLevel} from '../../data/dataFunctions/render'



function ContainerList(props) {
    //Prepare data
    console.log('ID:',props.curComponentId)
    console.log('Doc data:',props.singleDocument)
    console.log('Doc data:',props.singleDocument.docComponents[props.curComponentId])


    const componentId = props.curComponentId
    const components = props.singleDocument.docComponents
    const curComponent = props.singleDocument.docComponents[props.curComponentId]
    const documentViews = props.singleDocument.documentView

    const cur_component = props.singleDocument.docComponents[props.curComponentId]
    // const childrenComponents = getChildrenComponents(props.curComponentId, components, curDocMap) 
    
        
    //Create Childist
    // var childList = curChildren.map(function(curChilds){
    //     return <ChildEx key={curChilds.id} data={curChilds} />;
    //   })

      
    return (
        <section className={'outer_style_container_list'}>
            {/* <div>{childList}</div> */}
        </section>
    )
}

export default ContainerList
