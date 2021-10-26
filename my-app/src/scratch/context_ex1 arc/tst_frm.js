import React from 'react';
import { useContext } from 'react/cjs/react.development'
import { TstDocumentContext } from './tst_context.js.js'

 
const Tst_inputForm = (props) => {
    const allcxt =  useContext(TstDocumentContext);
    const {updateState} =  useContext(TstDocumentContext);

    console.log('allcxt',allcxt.title)
	

    const modifyItem = (event) =>{
			event.preventDefault();
            console.log(event.target.value)
            const newState={"title":event.target.value}
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
					value={allcxt.title}
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
