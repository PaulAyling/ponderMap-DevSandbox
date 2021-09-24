import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons'

function BtnDragHandle(props) {
  return (
      <div className = "align-bottom">
          {props.containerData.Btn_visible.drag ? 
          <FontAwesomeIcon title="move item" icon={faArrowsAlt} className="align-bottom mr-2 text-black visible hover:text-gray-300"/> 
          :''}
      </div>

  );
}
export default BtnDragHandle