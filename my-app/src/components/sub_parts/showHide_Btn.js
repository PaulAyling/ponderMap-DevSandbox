import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'


function ShowHide_btn() {
  const element = <FontAwesomeIcon icon={faSortDown} />
    const [togl, setTogl] = useState(false);
    function increment() {
        setTogl(prevState => !prevState);
    }
  return (
    <button onclick={increment} >
        <FontAwesomeIcon 
            icon={togl ? faSortDown : faSortUp} className="ml-3 hover:text-blue-500"/>
    </button>

  );
}
export default ShowHide_btn