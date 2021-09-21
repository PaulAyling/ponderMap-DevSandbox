import  { useState }from 'react'
import Header from '../layout/Header'
import Body from '../layout/Body'


function Container(props) {
    const currentContainer = props.container_data.container_name

    [drag, remove, edit, share] = props.container_data.Btn_visable



    const [showHide, setshowHide] = useState(false);
    // button defaults from config
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
    
    return (
        <article className='m-1'>
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
