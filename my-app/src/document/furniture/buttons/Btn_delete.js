import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

function BtnDelete(props) {
  return (
      <div className = "align-bottom">
          {props.cardSettings.cardButtonsVisable.delete ? 
          <FontAwesomeIcon title="Delete item" icon={faMinusCircle} className="align-bottom ml-2 text-black  hover:text-gray-300"/> 
          :''}
      </div>

  );
}
export default BtnDelete