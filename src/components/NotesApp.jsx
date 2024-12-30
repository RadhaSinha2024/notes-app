import React, { useState, useEffect } from 'react';
import '../styles/NotesApp.css';
const alan = 23;
const NotesApp = () => {
  // State to manage notes
  console.log('alan', alan);
  const peter = 1222;
  const [notes, setNotes] = useState(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    console.log('Initial load from localStorage:', storedNotes);
    return storedNotes;
  });
  const [noteText, setNoteText] = useState(''); // For creating or editing notes
  const [editIndex, setEditIndex] = useState(null); // To track editing state

  // Load notes from local storage on initial render
//   useEffect(() => { // This is our document.ready
//     const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//     console.log('Loaded notes from localStorage:', storedNotes);
//     //debugger;
//     setNotes(storedNotes);
//   }, []);

  // Sync notes to local storage whenever they change
  useEffect(() => {
    console.log('Saving notes to localStorage:', notes);
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <h1>Notes App</h1>
      {/* Notes Form */}
      <textarea
        placeholder="Write your note here..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <br />
      <button
        onClick={() => {
          if (editIndex !== null) {
            // Edit note
            const updatedNotes = [...notes];
            updatedNotes[editIndex] = noteText;
            setNotes(updatedNotes);
            setEditIndex(null); // Reset edit state
          } else {
            // Add new note
            setNotes([...notes, noteText]);
          }
          setNoteText('');
        }}
      >
        {editIndex !== null ? 'Update Note' : 'Add Note'}
      </button>

      {/* Notes List */}
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button
              onClick={() => {
                setEditIndex(index); // Set edit mode
                setNoteText(note); // Pre-fill the textarea
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                setNotes(notes.filter((_, i) => i !== index)); // Delete note
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesApp;
