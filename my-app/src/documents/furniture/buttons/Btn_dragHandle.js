import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons'

function BtnDragHandle(props) {

  return (
      <div >
          <FontAwesomeIcon icon={props.showHide ? faArrowsAlt :''} className="ml-3 hover:text-blue-500"/>
      </div>

  );
}
export default BtnDragHandle