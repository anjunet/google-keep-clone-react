import React from "react";
import "./Notes.css";
import Note from "./Note/Note";

const Notes = ({ notes, deleteNote, toggleModal, setSelectedNote }) => (
  <div className="notes">
    {notes.length === 0 ? (
      <p>Notes that you add appear here</p>
    ) : (
      notes.map((note, index) => (
        <Note
          key={index}
          note={note}
          deleteNote={deleteNote}
          toggleModal={toggleModal}
          setSelectedNote={setSelectedNote}
        />
      ))
    )}
  </div>
);

export default Notes;
