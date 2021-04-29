import React from 'react'
import Note from './Note'
import { Wrapper } from './theme'

const AddNote = ({notes}) => {

    return(
        <Wrapper>
        {
        notes.map((note) => {
            return(
                <Note
                key={note.id}
                id={note.id} 
                priority={note.priority}
                content={note.content}
                created={note.created}
                isEdit={note.isEdit}
                />
            )
        })}    
        </Wrapper>
    )
}

export default AddNote