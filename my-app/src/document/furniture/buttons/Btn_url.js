import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

function BtnUrl(props) {
  return (
      <div className = "align-bottom">
          {props.containerData.Btn_visible.url ? 
          <FontAwesomeIcon title="toggle link / title" icon={faLink} className="align-bottom ml-2 text-black visible hover:text-gray-300"/> 
          :''}
      </div>

  );
}
export default BtnUrl