import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'



function Btn_ShowHide(props) {
  return (
    <button title="show / hide" onClick={() => props.cardState.showHide_fn_tgl()} >
        <FontAwesomeIcon icon={props.cardState.showHide ? faSortDown : faSortUp} className="ml-2 mr-1 hover:text-blue-500"/>
    </button>

  );
}
export default Btn_ShowHide