import React from 'react';
import { useContext } from 'react/cjs/react.development'
import { DocumentContext } from '.././../contexts/DocumentContext'
import { getComponent,updateComponent} from '../../data/dataFunctions/render'
import { v4 as uuidv4 } from 'uuid';
 
const InputForm = (props) => {
	const {id} = props.curContainerData
    var allcxt =  useContext(DocumentContext);
    const {updateState} =  useContext(DocumentContext);

	
	const curComponent = getComponent(id,allcxt.userId,allcxt.documentComponents)

    const modifyItem = (event) =>{
			event.preventDefault();
			console.log('modifyItem running......')
			const newComponent = updateComponent(curComponent,event.target.value,'title')
			console.log('modifyItem N edw compo......',newComponent[1].versions[1].title)
			//Update state with new value 
			updateState(newComponent) 
			// console.log('event.target.value',event.target.value)

        }



    const handleSubmit = (event) => {
            event.preventDefault();
            console.log('handlesubmit initiated xxxx',event.target)
        };   
    return (
		<form
			onSubmit={handleSubmit} key='8998'>
			<div className='header_text' key='7878'>
				<input
					key={uuidv4()}
					type='text'
					placeholder='Enter Descriptor'
					value={allcxt.documentComponents[curComponent.id].versions[curComponent.usersVersion].title}
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