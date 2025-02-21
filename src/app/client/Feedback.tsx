import { useState } from "react";

export default function Feedback() {
  const [feedback, setFeedback] = useState(["Great work!"]);
  const [newFeedback, setNewFeedback] = useState("");

  const addFeedback = () => {
    if (newFeedback.trim()) {
      setFeedback([...feedback, newFeedback]);
      setNewFeedback("");
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Client Feedback</h2>
      <textarea
        value={newFeedback}
        onChange={(e) => setNewFeedback(e.target.value)}
        placeholder="Write feedback..."
        className="p-2 w-full bg-gray-700 rounded"
      />
      <button onClick={addFeedback} className="mt-2 bg-blue-500 p-2 rounded w-full">
        Submit Feedback
      </button>
      <ul className="mt-4">
        {feedback.map((fb, index) => (
          <li key={index} className="p-2 bg-gray-700 rounded mt-1">{fb}</li>
        ))}
      </ul>
    </div>
  );
}
