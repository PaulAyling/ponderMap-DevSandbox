import React ,{ useState }from 'react'
import Header from '../layout/Header'
import Body from './Body';



function Container(props) {
    const [togl, setTogl] = useState(false);

    function show_hide() {
        console.log('Ran from container.js')
        setTogl(prevState => !prevState);
      }
    return (<article>
        <Header
        container_presets={props.container_presets}
        show_hide = {show_hide}
        togl = {togl}
        
        />
        {togl ? '': <Body /> }

    </article>
        
    )
}

export default Container
