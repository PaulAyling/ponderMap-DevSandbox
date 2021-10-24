import React,{ useEffect } from 'react';
import { useContext } from 'react/cjs/react.development'
import { DocumentContext } from '.././../contexts/DocumentContext'
import { getComponent,updateComponent} from '../../data/dataFunctions/render'
import { v4 as uuidv4 } from 'uuid';
 
const InputForm = (props) => {
    var allcxt =  useContext(DocumentContext);
    const {updateState} =  useContext(DocumentContext);
	const {id,header_text} = props.curContainerData
	
	const curComponent = getComponent(id,allcxt.userId,allcxt.documentComponents)
	var title = allcxt.documentComponents[curComponent.id].versions[curComponent.usersVersion].title
	console.log('allcxt:',allcxt.documentComponents[curComponent.id].versions[curComponent.usersVersion].title)

	var between = title
    const modifyItem = (event) =>{
			event.preventDefault();
			// console.log('modifyItem running......')
			const newComponent = updateComponent(curComponent,event.target.value,'title')
			// console.log('modifyItem Nedw compo......',newComponent[1].versions[1].title)
			//Update state with new value 
			updateState(newComponent) 
			console.log('event.target.value',event.target.value)
			title = event.target.value
			console.log('title in modifyItem',title)

        }

		console.log('title',title)
		useEffect(() =>{
			console.log('state has been changed')
			
		})

    const handleSubmit = (event) => {
            event.preventDefault();
            console.log('handlesubmit initiated xxxx',event.target)
        };   
    return (
		<form
			onSubmit={handleSubmit}>
			<div className='header_text'>
				<input
					key={uuidv4()}
					type='text'
					placeholder='Enter Descriptor'
					value={title}
					onChange={(event) => {
						modifyItem(
							event,
							'name'
						);
					}}
				/> 
			</div>
		</form>
	);
};

export default InputForm;
/* NEXT STEPS

1. TAKE THE TITLE & REPLACE TITLE ITO THE "VERSIONS" 
2. SPREAD NEW VERSIONS INTO THE COMPONETS
3. SPREAD THE COMPONET INTO THE COMPNENTS 


*/