import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faSave, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, DivOption, DivWrapper, TextArea, SpanButton } from './theme'

const Note = ({id, priority, content}) => {

    const [state, setState] = useState({
        select:'',
        note:''
    })
    const handleChangeSelect = (e) =>{
        setState({
            select: e.target.value
        })
    }
    const handleChangeArea = (e) => {
        setState({
            note: e.target.value
        })
    }
    const handleClickSave = () => {
        console.log('save')
    }

    return(
    <DivWrapper>
        <DivOption>
            <select value={state.select} onChange={handleChangeSelect} name="priority">
                <option value="defalut" defaultChecked>{priority}</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="important">Important</option>
            </select>
            <SpanButton>
                <Button title="Edit"><FontAwesomeIcon icon={faPencilAlt} /></Button>
                <Button onClick = {handleClickSave}title="Save"><FontAwesomeIcon icon={faSave} /></Button>
                <Button title="Cancel"><FontAwesomeIcon icon={faTimesCircle} /></Button>
            </SpanButton>
        </DivOption>
        <TextArea 
            name={id} 
            onChange={handleChangeArea}
            value={state.note || content} 
            placeholder="Add Note" 
        />         
    </DivWrapper>
    )
}

export default Note