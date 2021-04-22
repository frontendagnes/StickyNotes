import React, { useEffect, useState, useContext } from 'react';
import AddNote from '../../components/AddNote';
import { DivWrapper } from './theme';
import api from '../../firebase';
import TopPanel from '../../components/TopPanel';
import authContext from '../../Context';
import Footer from '../../components/Footer'
// import Note from '../../components/AddNote/Note'
const WrapperContent = () => {
    const [notes, setNotes] = useState([])
    const { text, setText } = useContext(authContext)
    useEffect(() => {
        let ref = api.ref("/notes");
        ref.on("value", (data) => {
            let notes = data.val()
            let newState = []
            for(let note in notes){
                newState.push({
                    id: note,
                    content: notes[note].content,
                    datatime: notes[note].datatime,
                    isEdit: notes[note].isEdit,
                    priority: notes[note].priority,
                })
            }
            setNotes(newState)
        })
    }, [])

    const handleClickAdd = () => {
        const item = {
            content: '',
            datatime: Date.now(),
            isEdit: false,
            priority: 'Low',
        }
            api.ref("/notes")
                .push(item)
                .then(() => {
                    setText('')
                })
                .catch((error) => console.log(error))
   
    }
    return(
        <DivWrapper>
            <TopPanel 
                onClick={handleClickAdd}
            />    
            <AddNote 
                notes={notes}
            />
            <Footer />
        </DivWrapper>
    )
}

export default WrapperContent;