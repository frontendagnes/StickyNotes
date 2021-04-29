import React, {useState, useContext} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faSave, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, DivOption, DivWrapper, TextArea, DivDate, Select, Option } from './theme'
import api from '../../utility/firebase'
import authContext from '../../utility/Context'
const Note = ({id, priority, content, created, isEdit}) => {

const { colorLow, colorMedium, colorImportant } = useContext(authContext)
const [select, setSelect] = useState(priority)
const [note, setNote] = useState(content)
const [edit, setEdit] = useState(false)
    
const handleChangeSelect = (e) =>{
    setSelect(e.target.value)
    }
const handleChangeArea = (e) => {
    setNote(e.target.value)
    }
const handleClickSave = (idNote) => {
    const noteEdit = api.ref(`notes/${idNote}`)
        noteEdit.update({
            content: note,
            isEdit: new Date().toLocaleString(),
            priority: select,
            created: created,
        })
        setEdit(false)
    }
const handleClickCancel = (idNote) => {
    const noteEdit = api.ref(`notes/${idNote}`)
        noteEdit.remove()
    }
const handleClickEdit = () => {
    setEdit(!edit)
    }
    return(
    <DivWrapper>
        <DivOption style={select === "low" ? {backgroundColor:colorLow} : select === "medium" ? {backgroundColor:colorMedium} : select ==="important"? {backgroundColor:colorImportant}: {backgroundColor: "#EEEEEE"}}>
            <Select  value={select} onChange={handleChangeSelect} name="priority">
                <Option value="defalut" defaultChecked>---</Option>
                <Option value="low" >low</Option>
                <Option value="medium">medium</Option>
                <Option value="important">important</Option>
            </Select>
            <span>
                <Button onClick = {handleClickEdit}title="Edit"><FontAwesomeIcon icon={faPencilAlt} /></Button>
                <Button onClick = {() => handleClickSave(id)}title="Save"><FontAwesomeIcon icon={faSave} /></Button>
                <Button onClick = {() => handleClickCancel(id)}title="Cancel"><FontAwesomeIcon icon={faTimesCircle} /></Button>
            </span>
        </DivOption>
            <TextArea 
                name={id} 
                onChange={handleChangeArea}
                value={note || content} 
                placeholder="Add Note"
                disabled={edit ? false : true }
              /> 
        <DivDate><span><b>Added:</b> {created}</span> <span><b>Edited:</b> {isEdit}</span></DivDate>  
    </DivWrapper>
    )
}

export default Note