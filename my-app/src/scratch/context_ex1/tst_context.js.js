import {createContext, Component } from 'react'

export const TstDocumentContext = createContext()

class TstDocumentContextProvider extends Component{
    constructor(props) {
        super(props);
        this.state= {
           'title':"A bloody Title"
        }
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
        }
        render(){
            console.log('context state:',this.state)
        return (
            <TstDocumentContext.Provider value={{...this.state,
                'updateState':this.updateState
            }}>
                {this.props.children}
            </TstDocumentContext.Provider>
        );
    }

}
export default TstDocumentContextProvider
