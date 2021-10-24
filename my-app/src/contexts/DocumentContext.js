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
            console.log('updateState ARG',newAllComponents)
        //5. Create New State
            const newState = {
                ...this.state,
                ...newAllComponents
	        }
            //  update state to change the title of a post
            this.setState(newState)
        }
        render(){
        console.log('context state', this.state)
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
