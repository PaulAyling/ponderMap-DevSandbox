import {createContext, Component } from 'react'
import {singleDocument} from '../data/mockup/singleDocument'

export const DocumentContext = createContext()



class DocumentContextProvider extends Component{
    constructor(props) {
        super(props);

        this.state= {
            ...singleDocument
            
        }
        this.updateState = this.updateState.bind(this);
    }
        updateState= (newState,currentState) =>{
            //  update state to change the title of a post
            console.log('update state ran!')
            this.setState({data: 'Data updated...'})
        }



    render(){
        return (
            <DocumentContext.Provider value={{...this.state,'updateState':this.updateState}}>
                {this.props.children}
            </DocumentContext.Provider>
        );
    }

}
export default DocumentContextProvider
