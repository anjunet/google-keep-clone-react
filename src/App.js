// The main router
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";

const NOTES = [];

const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (note) => {
    if (!note.text.trim()) return; // Prevent adding empty notes
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const editNote = (editedNote) => {
    setNotes((prevNotes) => {
      const newArray = prevNotes.map((note) => {
        if (editedNote.id === note.id) {
          note.title = editedNote.title;
          note.text = editedNote.text;
        }
        return note;
      });
      return newArray;
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
        />
      )}
    </div>
  );
};

export default App;
