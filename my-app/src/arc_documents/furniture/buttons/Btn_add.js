import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function BtnAdd(props) {
  return (
      <div className = "align-bottom">
          {props.containerData.Btn_visible.add ? 
          <FontAwesomeIcon title="Add item" icon={faPlusCircle} className="align-bottom ml-2 text-black visible hover:text-gray-300"/> 
          :''}
      </div>

  );
}
export default BtnAdd