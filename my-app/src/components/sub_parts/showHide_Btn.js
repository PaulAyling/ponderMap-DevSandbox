import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

function showHide_btn() {
    const element = <FontAwesomeIcon icon={faSortDown} />
    const [togl, setTogl] = useState(false);
    function increment() {
        setTogl(prevState => !prevState);
    }
  return (
    <button onClick={increment} >
        <FontAwesomeIcon 
            icon={togl ? faSortDown : faSortUp} className="hover:text-blue-500"/>
    </button>

  );
}
export default showHide_btn