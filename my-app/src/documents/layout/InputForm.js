import React , {useEffect, useRef }from 'react';
import { useContext } from 'react/cjs/react.development'
import { DocumentContext } from '.././../contexts/DocumentContext'
import { getComponent,updateComponent} from '../../data/dataFunctions/render'
import { v4 as uuidv4 } from 'uuid';
 
const InputForm = (props) => {
	var allcxt =  useContext(DocumentContext);
    const {updateState} =  useContext(DocumentContext);
	//Vars for getComponent()
	const {id} = props.curContainerData
	const userId = allcxt.userId
	const docComponents = allcxt.documentComponents
	const curComponent = getComponent(id,userId,docComponents)
	// To keep the focus {don't really understand why `i need this}
	// **  Todo  This works but dows not work when there are more that 1 input box edited at same time
	//           this is becuase the reference is not unique
	const inputBox = useRef(null)
	useEffect(() => {
		inputBox.current.focus()
	  }, []);
	  
	
    const modifyItem = (event,name) =>{
			event.preventDefault();
			const newComponent = updateComponent(curComponent,event.target.value,'title')
			//Update state with new value 
			updateState(newComponent) 
        }
    const handleSubmit = (event) => {
            event.preventDefault();
            console.log('handlesubmit initiated xxxx',event.target)
			console.log('This is where the database will get written to')
        }; 
    return (
		<form
		onSubmit={handleSubmit} key={uuidv4()}>
			<div className='header_text' >
				<input ref={inputBox}
					type='text'
					placeholder='Enter Descriptor'
					value={curComponent.title}
					onChange={(event) => {
						modifyItem(
							event,
							'name',
							id,
							userId,
							docComponents

						);
					}}
				/> 
			</div>
		</form>
	);
};
export default InputForm;