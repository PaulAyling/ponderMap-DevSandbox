import React from 'react';
import { useContext } from 'react/cjs/react.development'
import { DocumentContext } from '../../contexts/DocumentContext'
import { getCurCompVer} from '../../data/dataFunctions/render'
import { v4 as uuidv4 } from 'uuid';
 
const InputForm = (props) => {
    const allcxt =  useContext(DocumentContext);
    const {documentComponents,updateState} =  useContext(DocumentContext);
	const curComponent = getCurCompVer(props.id,props.version,documentComponents)




	// console.log('curComponent',curComponent)

    const modifyItem = (event) =>{
            console.log('MOdifying item.....',event.target.value)
			//Update state with new value 
			updateState()
        }
    const handleSubmit = (event) => {
            event.preventDefault();
            console.log('handlesubmit initiated',event.target)
        };   
    return (
		<form
			onSubmit={handleSubmit}>
			<div className={props.formWrapper }>
				<input
					key={uuidv4()}
					type='text'
					placeholder='Enter Descriptor'
					value={curComponent.title}
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