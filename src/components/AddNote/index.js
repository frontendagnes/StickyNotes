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
                id={note.id}
                key={note.id} 
                content={note.content}
                priority={note.priority}
                />
            )
        })}    
        </Wrapper>
    )
}

export default AddNote