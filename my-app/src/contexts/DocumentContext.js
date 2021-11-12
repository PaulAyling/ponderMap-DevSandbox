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
    }
    updateState= (newAllComponents) =>{
        //5. Create New State
        const newdocumentComponents = {
            ...this.state.documentComponents,
            ...newAllComponents
        }
        const newState = {
            ...this.state,
            'documentComponents':newdocumentComponents
        }
        this.setState(newState)
    }
    render(){
            return (
            <DocumentContext.Provider value={
                {...this.state,
                'testVar':this.testVar,
                'updateState':this.updateState,
                add,remove,edit
                }}>
                {this.props.children}
            </DocumentContext.Provider>
        );
    }

}
export default DocumentContextProvider
