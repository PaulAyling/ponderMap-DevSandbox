import {createContext, Component } from 'react'
import {singleDocument} from '../data/mockup/singleDocument'
import {add,remove,edit} from '../data/dataFunctions/modify'

export const DocumentContext = createContext()

class DocumentContextProvider extends Component{
    constructor(props) {
        super(props);
        this.state= {
            ...singleDocument,
            'userId':'1'        //hardcoded for now
        }
        this.updateState = this.updateState.bind(this);
        console.log('1 STATE', this.state.documentComponents[1].versions[1].title)
    }
    updateState= (newAllComponents) =>{
        console.log('Context: updateState ARG',newAllComponents[1])
        //5. Create New State
        const newdocumentComponents = {
            ...this.state.documentComponents,
            ...newAllComponents
        }
        console.log('Context: newdocumentComponents',newdocumentComponents)
        const newState = {
            ...this.state,
            'documentComponents':newdocumentComponents
        }
        console.log('Context:  newState', newState)
        // console.log('Context: updateState newState', newState[1].versions[1].title)
        //  update state to change the title of a post
        this.setState(newState)
        console.log('Context: this state', this.state)
    }
    render(){
            console.log('2 STATE', this.state.documentComponents[1].versions[1].title)
            return (
            <DocumentContext.Provider value={
                {...this.state,
                'updateState':this.updateState,
                add,remove,edit
                }}>
                {this.props.children}
            </DocumentContext.Provider>
        );
    }

}
export default DocumentContextProvider
