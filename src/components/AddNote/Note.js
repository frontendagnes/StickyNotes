import React, {useState, useContext} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faSave, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, DivOption, DivWrapper, TextArea, DivDate, Select, Option } from './theme'
import api from '../../utility/firebase'
import authContext from '../../utility/Context'
import firebase from 'firebase';
import moment from 'moment';

const Note = ({id, priority, content, created, isEdit}) => {
const {newNotes, setNewNotes} = useContext(authContext)
const { colorLow, colorMedium, colorImportant } = useContext(authContext)
const [select, setSelect] = useState(priority)
const [note, setNote] = useState(content)
const [edit, setEdit] = useState(false)
let date = new Date();
let year = date.getFullYear(); 
const handleChangeSelect = (e) =>{
    setSelect(e.target.value)
    }
const handleChangeArea = (e) => {
    setNote(e.target.value)
    }
const handleClickSave = () => {
    // const noteEdit = api.ref(`notes/${idNote}`)
    //     noteEdit.update({
    //         content: note,
    //         isEdit: new Date().toLocaleString(),
    //         priority: select,
    //         created: created,
    //     })
    //     setEdit(false)
    if(!id){
    api.collection("notes")
        .doc(id)
        .set({
            content: note,
            created: firebase.firestore.FieldValue.serverTimestamp(),
            isEdit: firebase.firestore.FieldValue.serverTimestamp(),
            priority: select  
        })
        .catch((error) => {console.log(error)})
    }else{
        api.collection("notes")
        .doc(id)
        .set({
            content: note,
            created: created,
            isEdit: firebase.firestore.FieldValue.serverTimestamp(),
            priority: select  
        })
        .catch((error) => {console.log(error)})
    }
    }
const handleClickCancel = (idNote) => {
    // const noteEdit = api.ref(`notes/${idNote}`)
    //     noteEdit.remove()
    if(id){
        api.collection("notes")
            .doc(id)
            .delete()
            .then(() => {
                console.log(`Document${id} successfully deleted!`)
                })
            .catch((error) => console.error("Error removing document", error))
    }else{
        setNewNotes(!newNotes)
    }

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
                <Button onClick = {handleClickSave}title="Save"><FontAwesomeIcon icon={faSave} /></Button>
                <Button onClick = {handleClickCancel}title="Cancel"><FontAwesomeIcon icon={faTimesCircle} /></Button>
            </span>
        </DivOption>
            <TextArea 
                name={id} 
                onChange={handleChangeArea}
                value={note || content} 
                placeholder={edit ? "Add Note" : "To add a note, click on the pencil!"}
                disabled={edit ? false : true }
              /> 
        <DivDate><span><b>Added:</b>{moment.unix(created).format(`MMMM Do ${year} h:mma`)}</span> <span><b>Edited:</b>{moment.unix(isEdit).format(`MMMM Do ${year} h:mma`)}</span></DivDate>  
    </DivWrapper>
    )
}

export default Note