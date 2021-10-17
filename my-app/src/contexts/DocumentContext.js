import {createContext, Component } from 'react'
import {singleDocument} from '../data/mockup/singleDocument'
import {add,remove,edit} from '../data/dataFunctions/modify'

export const DocumentContext = createContext()

class DocumentContextProvider extends Component{
    constructor(props) {
        super(props);
        this.state= {
            ...singleDocument        }
        this.updateState = this.updateState.bind(this);
    }
        updateState= (newAllComponents) =>{
        //5. Create New State
            const newState = {
                ...this.state,
                ...newAllComponents
	        }
            //  update state to change the title of a post
            
            this.setState(newState)
            console.log('context STATE:',this.state.documentComponents[1].versions[1].title)
        }

    render(){
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
