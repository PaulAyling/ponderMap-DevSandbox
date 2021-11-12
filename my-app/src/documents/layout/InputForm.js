import React , {useEffect, useState, useRef }from 'react';
import { useContext } from 'react/cjs/react.development'
import { DocumentContext } from '.././../contexts/DocumentContext'
import { getComponent,updateComponent} from '../../data/dataFunctions/render'
import { v4 as uuidv4 } from 'uuid';
 
const InputForm = (props) => {
	const {id} = props.curContainerData
    var allcxt =  useContext(DocumentContext);
	const userId = allcxt.userId
	const docComponents = allcxt.documentComponents
    const {updateState} =  useContext(DocumentContext);
	const title = allcxt.documentComponents[1].versions[1].title
	
	const searchInput = useRef(null)

	useEffect(() => {
		console.log("Effect");
		searchInput.current.focus()
	  }, []);


    const modifyItem = (event,name,id,userId,docComponents) =>{
			event.preventDefault();
			console.log('modifyItem running......')
			const curComponent = getComponent(id,userId,docComponents)
			console.log('curComponent',curComponent)
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
				<input ref={searchInput}
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
			{/* <div>
				<h1>{allcxt.documentComponents[curComponent.id].versions[curComponent.usersVersion].title}</h1>
			</div> */}
		</form>
	);
};

export default InputForm;
/* NEXT STEPS

1. TAKE THE TITLE & REPLACE TITLE ITO THE "VERSIONS" 
2. SPREAD NEW VERSIONS INTO THE COMPONETS
3. SPREAD THE COMPONET INTO THE COMPNENTS 


*/