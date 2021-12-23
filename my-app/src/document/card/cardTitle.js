import React , {useEffect, useRef }from 'react';
import  { useContext,useState  } from 'react'
import { DocumentContext } from '../../contexts/DocumentContext'
import { getComponent} from '../../data/functions/display/display'
import { edit } from '../../data/functions/modify/edit'
import { v4 as uuidv4 } from 'uuid';

function CardTitle(props) {
    //1. GET CARD CONTENT
    const documentContext = useContext(DocumentContext)
    // const usersViewId = getUsersViewId(documentContext)
    const cardContent = getComponent(props.id,documentContext)
    console.log('cardContent',cardContent)
	const inputBox = useRef(null)
	useEffect(() => {
		inputBox.current.focus()
	  }, []);

      const modifyItem = (event,name,id,cardContent) =>{
        event.preventDefault();
        console.log('event.target.value',event.target.value)
        console.log('name',name)
        console.log('id',id)
        console.log('cardContent:  ',cardContent)
        const newComponent =   edit('title',event.target.value,1,cardContent)
        console.log('newComponent',newComponent)

    
        // updateState(newComponent) 
    }
const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handlesubmit initiated xxxx',event.target)
        console.log('This is where the database will get written to')
    }; 
return (
    <form
    onSubmit={handleSubmit} key={uuidv4()}>
        <div className='header_text' >
            <input ref={inputBox}
                type='text'
                placeholder='Enter Descriptor'
                value={cardContent.title}
                onChange={(event) => {
                    modifyItem(
                        event,
                        'title',
                        cardContent.componentId,                        
                        cardContent

                    );
                }}
            /> 
        </div>
    </form>
);
}

export default CardTitle
