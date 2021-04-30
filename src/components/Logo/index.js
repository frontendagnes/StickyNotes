import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Logo = (props) => {
const style = {
    fontSize: props.fontSize,
    marginTop: props.top + 'px',
    marginLeft: props.left + 'px',
    marginBottom: props.bottom + 'px',
    marginRight: props.right + 'px',
    color: props.color
}

return(
    <div style={style}><FontAwesomeIcon icon={faEdit}/>StickyNotes</div>
)
}
export default Logo