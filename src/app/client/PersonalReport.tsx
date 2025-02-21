export default function ProjectReport() {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Project Completion</h2>
        <p>Current Progress: 70%</p>
        <div className="w-full bg-gray-700 h-2 rounded mt-2">
          <div className="bg-blue-500 h-2 rounded w-[70%]"></div>
        </div>
      </div>
    );
  }
  