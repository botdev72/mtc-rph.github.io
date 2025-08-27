import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Cek panel listrik", done: false },
    { id: 2, name: "Cek pompa air", done: false },
    { id: 3, name: "Cek genset", done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Daily Checklist</h1>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="mr-2"
            />
            <span className={task.done ? "line-through" : ""}>{task.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
