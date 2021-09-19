import React ,{ useState }from 'react'
import Header from '../layout/Header'



function Container(props) {
    const [togl, setTogl] = useState(false);

    function show_hide() {
        console.log('Ran from container.js')
        setTogl(prevState => !prevState);
      }
    return (<section>
        <Header
        container_presets={props.container_presets}
        show_hide = {show_hide}
        togl = {togl}
        
        />
        {togl ? 'hello' :''}

    </section>
        
    )
}

export default Container
