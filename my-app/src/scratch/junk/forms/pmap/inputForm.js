import React, { useContext } from 'react';
import { DocumentContext } from '../../../../contexts/DocumentContext';
import { v4 as uuidv4 } from 'uuid';

const InputForm = (props) => {
    const {documentComponents} = useContext(DocumentContext);
    const curDocument = documentComponents[props.id]
    const {id, title, url } = curDocument

    console.log('curDocument:',curDocument)
    
    const modifyItem=()=>{
        console.log('ththt')
    }

	const handleSubmit = (event) => {
        console.log('submitting.....', event)
		event.preventDefault();
		// documentContext.updateDocument(
		// 	props.editorEssentials.editorState._id,
		// 	props.editorEssentials.editorState
		// );
	};
	const componentName = InputForm.title
	return (
		<form
			component={componentName}
			onSubmit={handleSubmit}>
			<div>
				<input
					key={uuidv4()}
					type='text'
					value={props.title}
					onChange={(event) => {
						modifyItem(
						);
					}}
				/>
			</div>
		</form>
	);
};

export default InputForm;
