import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons'

function Btn_dragHandle(props) {

  return (
      <div >
          <FontAwesomeIcon icon={faArrowsAlt} className="ml-3 hover:text-blue-500"/>
      </div>

  );
}
export default Btn_dragHandle