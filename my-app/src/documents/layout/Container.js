import  { useState }from 'react'
import Header from '../layout/Header'
import Body from './Body';

function Container(props) {
    const [showHide, setshowHide] = useState(false);
    const [showDrag, setShowDrag] = useState(false);

    const showHide_tgl = (prop) => {
        setshowHide(prevState => !prevState);
      }
    const showDrag_tgl = (prop) => {
        setShowDrag(prevState => !prevState);
      }
    const containerFunctions = {
        'showHide_tgl':showHide_tgl,
        'showDrag_tgl':showDrag_tgl
    }
    const containerState ={
        showHide,
        showDrag
    }
    
    return (<article className='p-1'>
        <Header
        container_presets={props.container_data}
        showHide = {showHide}
        containerFunctions = {containerFunctions}
        containerState = {containerState}
        />
        {showHide ?  <Body container_data={props.container_data }/> : '' }
       

    </article>
        
    )
}

export default Container
