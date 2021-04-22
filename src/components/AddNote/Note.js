import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faSave, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, DivOption, DivWrapper, TextArea, SpanButton } from './theme'
import authContext from '../../Context';

const Note = ({content, id, priority}) => {
const {text, setText} = useContext(authContext) 

const [state, setState] = useState({
    select:'',
    note:''
})   
const handleChange = (e) => {
setText({
    ...text,
    [e.target.name]: e.target.value,
})
setState({
    ...state,
     note: e.target.value
 })   

}

const handleChangeSelect = (e) => {
    setState({
        select: e.target.value
    })
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
                <Button title="Save"><FontAwesomeIcon icon={faSave} /></Button>
                <Button title="Cancel"><FontAwesomeIcon icon={faTimesCircle} /></Button>
            </SpanButton>
        </DivOption>
        <TextArea 
            name={id} 
            onChange={handleChange}
            value={state.note || content} 
            placeholder="Add Note" 
        />
               
    </DivWrapper>
    )
}

export default Note