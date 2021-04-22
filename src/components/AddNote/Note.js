import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faSave, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, DivOption, DivWrapper, TextArea, SpanButton } from './theme'
import api from '../../firebase'
const Note = ({id, priority, content, idNote}) => {

    // const [notes, setNotes] = useState([])
    //     useEffect(() => {
    //     let ref = api.ref("/notes");
    //     ref.on("value", (data) => {
    //         let notes = data.val()
    //         let newState = []
    //         for(let note in notes){
    //             newState.push({
    //                 id: note,
    //                 content: notes[note].content,
    //                 datatime: notes[note].datatime,
    //                 isEdit: notes[note].isEdit,
    //                 priority: notes[note].priority,
    //             })
    //         }
    //         setNotes(newState)
    //     })
    // }, [])

    const [select, setSelect] = useState('')
    const [note, setNote] = useState('')

    const handleChangeSelect = (e) =>{
        setSelect(e.target.value)
    }
    const handleChangeArea = (e) => {
        setNote(e.target.value)
    }
    const handleClickSave = (idNote) => {
        console.log('save')
        let note = api.ref(`notes/${idNote}`)
        console.log(note)
        note.update({
            content: note,
            datatime: Date.now(),
            priority: select,
        })

    }

    return(
    <DivWrapper>
        <DivOption>
            <select value={select} onChange={handleChangeSelect} name="priority">
                <option value="defalut" defaultChecked>{priority}</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="important">Important</option>
            </select>
            <SpanButton>
                <Button title="Edit"><FontAwesomeIcon icon={faPencilAlt} /></Button>
                <Button onClick = {() => handleClickSave(id)}title="Save"><FontAwesomeIcon icon={faSave} /></Button>
                <Button title="Cancel"><FontAwesomeIcon icon={faTimesCircle} /></Button>
            </SpanButton>
        </DivOption>
        <TextArea 
            name={id} 
            onChange={handleChangeArea}
            value={note || content} 
            placeholder="Add Note" 
        />         
    </DivWrapper>
    )
}

export default Note