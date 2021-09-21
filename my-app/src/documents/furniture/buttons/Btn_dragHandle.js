import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons'

function BtnDragHandle(props) {

  return (
      <div title="move item" >
          <FontAwesomeIcon icon={props.containerState.showDrag ? faArrowsAlt :''} className="align-text-bottom mr-1 text-black visible hover:text-gray-300"/>
      </div>

  );
}
export default BtnDragHandle