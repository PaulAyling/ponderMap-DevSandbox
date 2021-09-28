import {createContext, Component } from 'react'
import {singleDocument} from '../data/mockup/singleDocument'

export const DocumentContext = createContext()

class DocumentContextProvider extends Component{
    state= {
        ...singleDocument
    }
    render(){
        return (
            <DocumentContext.Provider value={{...this.state}}>
                {this.props.children}
            </DocumentContext.Provider>
        );
    }

}
export default DocumentContextProvider