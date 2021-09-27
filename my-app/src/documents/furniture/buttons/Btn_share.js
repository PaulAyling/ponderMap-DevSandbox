import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare} from '@fortawesome/free-solid-svg-icons'

function BtnShare(props) {
  return (
      <div className = "align-bottom">
          {props.containerData.Btn_visible.share ? 
          <FontAwesomeIcon title="Share item" icon={faShare} className="align-bottom ml-2 text-black visible hover:text-gray-300"/> 
          :''}
      </div>

  );
}
export default BtnShare