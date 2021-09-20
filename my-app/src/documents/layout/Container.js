import React ,{ useState }from 'react'
import Header from '../layout/Header'
import Body from './Body';

function Container(props) {
    const [showHide, setshowHide] = useState(false);

    function togle_var(toglVar) {
        console.log('show_hide ran')
        toglVar(prevState => !prevState);
      }
    return (<article className='p-1'>
        <Header
        container_presets={props.container_presets}
        togle_var = {togle_var}
        showHide = {showHide}
        
        />
        {showHide ?  <Body container_presets={props.container_presets }/> : '' }
       

    </article>
        
    )
}

export default Container
