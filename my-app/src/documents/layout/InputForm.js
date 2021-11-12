import React , {useEffect, useState, useRef }from 'react';
import { useContext } from 'react/cjs/react.development'
import { DocumentContext } from '.././../contexts/DocumentContext'
import { getComponent,updateComponent} from '../../data/dataFunctions/render'
import { v4 as uuidv4 } from 'uuid';
 
const InputForm = (props) => {
	var allcxt =  useContext(DocumentContext);
	//Vars for getComponent()
	const {id} = props.curContainerData
	const userId = allcxt.userId
	const docComponents = allcxt.documentComponents
    const {updateState} =  useContext(DocumentContext);
	const title = allcxt.documentComponents[1].versions[1].title
	
	// To keep the focus {don't really understand why `i need this}
	const inputBox = useRef(null)
	useEffect(() => {
		inputBox.current.focus()
	  }, []);

    const modifyItem = (event,name,id,userId,docComponents) =>{
			event.preventDefault();
			const curComponent = getComponent(id,userId,docComponents)
			const newComponent = updateComponent(curComponent,event.target.value,'title')
			//Update state with new value 
			updateState(newComponent) 
        }
    const handleSubmit = (event) => {
            event.preventDefault();
            console.log('handlesubmit initiated xxxx',event.target)
        }; 
    return (
		<form
		onSubmit={handleSubmit} key={uuidv4()}>
			<div className='header_text' >
				<input ref={inputBox}
					type='text'
					placeholder='Enter Descriptor'
					value={title}
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