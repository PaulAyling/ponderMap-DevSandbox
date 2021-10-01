import React from 'react';
import { useContext } from 'react/cjs/react.development'
import { DocumentContext } from '../../contexts/DocumentContext'
import { getCurCompVer} from '../../data/dataFunctions/render'

import { v4 as uuidv4 } from 'uuid';
 
const InputForm = (props) => {
    const allcxt =  useContext(DocumentContext);

    const {documentComponents} =  useContext(DocumentContext);
    // const curComponent = getCurCompVer(props.id,props.version,documentComponents)
	// console.log('documentComponents',documentComponents)
	console.log('>>>>>>>>>>>>',documentComponents[2])




	// console.log('curComponent',curComponent)

    const modifyItem = (event) =>{
            console.log('MOdifying item.....',event.target,event.name)
        }
    const handleSubmit = (event) => {
            event.preventDefault();
            console.log('handlesubmit initiated',event.target)

        };   
    return (
		<form
			onSubmit={handleSubmit}>
			<div className={props.formWrapper }>
				{/* <input
					key={uuidv4()}
					type='text'
					placeholder='Enter Descriptor'
					value={curComponent.title   }
					onChange={(event) => {
						modifyItem(
							event,
							'name'
						);
					}}
				/> */}
			</div>
		</form>
	);
};

export default InputForm;
	// const documentContext = useContext(DocumentContext);
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	documentContext.updateDocument(
	// 		props.editorEssentials.editorState._id,
	// 		props.editorEssentials.editorState
	// 	);
	// };

	// const componentName = InputForm.name