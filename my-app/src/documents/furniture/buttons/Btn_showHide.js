import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'


function Btn_ShowHide(props) {
  
  // const [togl, setTogl] = useState(false);
  // function show_hide2() {
  //   setTogl(prevState => !prevState);
  // }
  const element = <FontAwesomeIcon icon={faSortDown} />
  return (
    <button onClick={props.show_hide} >
        <FontAwesomeIcon icon={props.togl ? faSortDown : faSortUp} className="ml-3 hover:text-blue-500"/>
    </button>

  );
}
export default Btn_ShowHide