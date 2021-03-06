import React, { useEffect, useState } from "react";
import AddNote from "../../components/AddNote";
import TopPanel from "../../components/TopPanel";
import api from "../../utility/firebase";
import { Provider as MyProvider } from "../../utility/Context";
import Settings from "../../components/Settings";
import { DivWrapper, Wrapper, NewNoteWarapper } from "./theme/index";
import Footer from "../../components/Footer";
import Note from "../../components/AddNote/Note";
const WrapperContent = () => {
  const [newNotes, setNewNotes] = useState(false);
  const [notes, setNotes] = useState([]);
  const [color, setColor] = useState(localStorage.getItem("background"));
  const [colorLow, setColorLow] = useState(localStorage.getItem("colorLow"));
  const [colorMedium, setColorMedium] = useState(
    localStorage.getItem("colorMedium")
  );
  const [colorImportant, setColorImportant] = useState(
    localStorage.getItem("colorImportant")
  );
  const [settings, setSettings] = useState(false);

  useEffect(() => {
    api.collection("/notes").onSnapshot((snapshot) => {
      setNotes(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    // let ref = api.ref("/notes");
    // ref.on("value", (data) => {
    //     let notes = data.val()
    //     let newState = []
    //     for(let note in notes){
    //         newState.push({
    //             id: note,
    //             content: notes[note].content,
    //             created: notes[note].created,
    //             isEdit: notes[note].isEdit,
    //             priority: notes[note].priority,
    //         })
    //     }
    //     setNotes(newState)
    // })
    if (localStorage.getItem("background")) {
      setColor(color);
    } else {
      setColor("#ffffff");
    }

    if (localStorage.getItem("colorLow")) {
      setColorLow(colorLow);
    } else {
      setColorLow("#33FF66");
    }

    if (localStorage.getItem("colorMedium")) {
      setColorMedium(colorMedium);
    } else {
      setColorMedium("#FF9966");
    }

    if (localStorage.getItem("colorImportant")) {
      setColorImportant(colorImportant);
    } else {
      setColorImportant("#FF0000");
    }
  }, [color, colorLow, colorMedium, colorImportant]);
  const handleClickSettings = () => {
    setSettings(!settings);
  };
  const handleClickAdd = () => {
    setNewNotes(!newNotes);
    // const item = {
    //     content: "",
    //     created: new Date().toLocaleString(),
    //     isEdit: new Date().toLocaleString(),
    //     priority: "",
    // }
    //     api.ref("/notes")
    //         .push(item)
  };
  return (
    <Wrapper style={{ backgroundColor: color }}>
      <MyProvider
        value={{
          notes,
          setNotes,
          color,
          setColor,
          colorLow,
          setColorLow,
          colorMedium,
          setColorMedium,
          colorImportant,
          setColorImportant,
          newNotes,
          setNewNotes,
        }}
      >
        <TopPanel onClick={handleClickAdd} settings={handleClickSettings} />
        <DivWrapper>
            {newNotes && <NewNoteWarapper> <Note content="" created="" isEdit="" priority="" /></NewNoteWarapper>}
          <AddNote notes={notes} />
          {settings && <Settings />}
        </DivWrapper>
        <Footer />
      </MyProvider>
    </Wrapper>
  );
};

export default WrapperContent;
