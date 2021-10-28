import React from 'react';
import { useContext } from 'react/cjs/react.development'
// import { TstDocumentContext } from './tst_context.js'
import { DocumentContext } from '../../contexts/DocumentContext';
 
const Tst_inputForm = (props) => {
    const allcxt =  useContext(DocumentContext);
    const {updateState} =  useContext(DocumentContext);

    console.log('allcxt - components',allcxt.documentComponents[1].versions[1].title)
	

    const modifyItem = (event) =>{
			event.preventDefault();
            console.log(event.target.value)
            //THIS NEEDS TO CHANGE!!
            const newState={"userId":event.target.value}



            console.log('newState:',newState)
            updateState(newState) 

			

        }
    const handleSubmit = (event) => {
            event.preventDefault();
        };   
        const title = 'he'
    return (
        <div>
            <h1>Test Form</h1>
           <form
			onSubmit={handleSubmit}>
			<div className='header_text'>
				<input
					type='text'
					placeholder='Enter Descriptor'
					value={allcxt.userId}
					onChange={(event) => {
						modifyItem(
							event,
							'name'
						);
					}}
				/> 
			</div>
		</form> 
        </div>
		
	);
};

export default Tst_inputForm;
