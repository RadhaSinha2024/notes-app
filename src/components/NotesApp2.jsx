import React, { useState, useEffect } from 'react';
import '../styles/NotesApp.css';

const NotesApp2 = () => {
    const [notes, setNotes] = useState(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes'))||[];
        console.log('Initial load from localStorage:', storedNotes);
        return storedNotes
    });
    const [editIndex, setEditIndex] = useState(null);   
    const [noteText, setNoteText] = useState('');

    useEffect(()=>{
        console.log("Saving notes to localstorage", notes);
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])

    return (
        <div>
            <h1>Notes App</h1>
            <textarea
               placeholder='Write you own text...'
               value={noteText}
               onChange={(e)=> setNoteText(e.target.value)}
               ></textarea>
               <br/>
               <button
                onClick={()=>{
                    if(editIndex !== null){
                        const updatedNotes = [...notes]
                        updatedNotes[editIndex] = noteText;
                        setNotes(updatedNotes);
                        setEditIndex(null);
                    } else{
                        setNotes([...notes, noteText]);
                    }
                    setNoteText('');
                }}
                >
                   {editIndex != null ? 'Edit note': 'Add Note'}
                </button>
                <ul>
                { notes.map((note, index)=>(
                    <li key={index}
                    >{note}
                    <button onClick={()=>{
                        setNoteText(note) 
                        setEditIndex(index)
                }}>
                        Edit</button>
                    <button 
                    onClick={()=>{
                        setNotes(notes.filter((_,i) =>  i !== index));
                    }}
                    > Delete 
                    </button>
                    </li>
))

                }
                </ul>
        </div>
    )

};

export default NotesApp2;
