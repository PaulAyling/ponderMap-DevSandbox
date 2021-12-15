import {createContext, Component } from 'react'
import {singleDocument} from '../data/importSingleDocument'
import {authenticatedUser} from '../data/dbMockup/authenticatedUser'
import { add } from '../data/functions/modify/add'
import { remove } from '../data/functions/modify/remove'
import { edit } from '../data/functions/modify/edit'
import {newComponent} from '../data/classes/contextClasses'

export const DocumentContext = createContext()
class DocumentContextProvider extends Component{
    constructor(props) {
        super(props);
        this.state= {
            'document':{
                'header':singleDocument.header,
                'documentUsers':singleDocument.documentUsers,
                'documentViews':singleDocument.documentViews, //layout of the components for a given view
                'documentComponents':singleDocument.documentComponents
            }, // All components that belong to document}
            'authenticatedUser':authenticatedUser.userId,
            // 'utils':{newComponent,add,remove,edit}
            'utils':{add,remove,edit, newComponent}    
        }
            this.updateState = this.updateState.bind(this);
        }
    
    updateState= (newAllComponents) =>{
        //5. Create New State
        const newdocumentComponents = {
            ...this.state.document,
            ...newAllComponents
        }
        const newState = {
            ...this.state,
            'documentComponents':newdocumentComponents
        }
        this.setState(newState)
    }
    render(){
        console.log('CONTEXT STATE:', this.state)
            return (
            <DocumentContext.Provider value={
                {...this.state }}>
                {this.props.children}
            </DocumentContext.Provider>
        );
    }

}
export default DocumentContextProvider
