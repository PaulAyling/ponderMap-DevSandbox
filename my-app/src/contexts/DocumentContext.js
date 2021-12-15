import {createContext, Component } from 'react'
import {singleDocument} from '../data/importSingleDocument'
import { add } from '../data/functions/modify/add'
import { remove } from '../data/functions/modify/remove'
import { edit } from '../data/functions/modify/edit'

export const DocumentContext = createContext()
class DocumentContextProvider extends Component{
    constructor(props) {
        super(props);
        this.state= {
            singleDocument
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
        console.log('STATE:', this.state)
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
