import React, {useContext} from 'react'
import Note from './Note'
import { Wrapper } from './theme'
import authContext from '../../utility/Context' 
const AddNote = ({notes}) => {
    const {newNotes, setNewNotes} = useContext(authContext)
    return(
        <Wrapper>
        {
        notes.map((note) => {
            return(
                <Note
                key={note.id}
                id={note.id} 
                priority={note.data.priority}
                content={note.data.content}
                created={note.data.created}
                isEdit={note.data.isEdit}
                />
            )
        })}    
        </Wrapper>
    )
}

export default AddNote