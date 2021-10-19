import React from 'react';
import { useContext } from 'react/cjs/react.development'
import { DocumentContext } from '.././../contexts/DocumentContext'
import { getComponent,updateComponent} from '../../data/dataFunctions/render'
import { v4 as uuidv4 } from 'uuid';
 
const InputForm = (props) => {
    const allcxt =  useContext(DocumentContext);
    const {updateState} =  useContext(DocumentContext);
	const curComponent = getComponent(props.id,props.user,allcxt.documentComponents)
    const modifyItem = (event) =>{
			const newComponent = updateComponent(curComponent,event.target.value,'title')
			// console.log('IF: Result',newComponent[1])
			//Update state with new value 
			updateState(newComponent)
        }
    const handleSubmit = (event) => {
            event.preventDefault();
            console.log('handlesubmit initiated xxxx',event.target)
        };   
    return (
		<form
			onSubmit={handleSubmit}>
			<div className={props.formWrapper }>
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