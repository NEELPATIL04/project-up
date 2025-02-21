import { useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-700 rounded"
    >
      {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
