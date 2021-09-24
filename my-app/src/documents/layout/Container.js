import  { useState }from 'react'
import Header from '../layout/Header'
import Body from '../layout/Body'


function Container(props) {
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

    console.log('containerState',containerState)
    return (
        <article className='m-1'>
            <Header
            container_data={props.container_data}
            showHide = {showHide}
            containerFunctions = {containerFunctions}
            containerState = {containerState}
            />
            {/* Alternates between body or children */}
            {showHide ?  <Body container_data={props.container_data }/> : '' }
        </article>
    )
}

export default Container
