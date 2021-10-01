import {createContext, Component } from 'react'
import {singleDocument} from '../data/mockup/singleDocument'
import {add,remove,edit} from '../data/dataFunctions/stateEdit'

export const DocumentContext = createContext()

class DocumentContextProvider extends Component{
    constructor(props) {
        super(props);
        this.state= {
            ...singleDocument        }
        this.updateState = this.updateState.bind(this);
    }
        updateState= (newState,currentState) =>{
            //  update state to change the title of a post
            this.setState({test:99})
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
