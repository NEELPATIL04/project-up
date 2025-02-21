import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState(["Initial Note"]);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Notes</h2>
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Add a note..."
        className="p-2 w-full bg-gray-700 rounded"
      />
      <button onClick={addNote} className="mt-2 bg-blue-500 p-2 rounded w-full">
        Add Note
      </button>
      <ul className="mt-4">
        {notes.map((note, index) => (
          <li key={index} className="p-2 bg-gray-700 rounded mt-1">{note}</li>
        ))}
      </ul>
    </div>
  );
}
