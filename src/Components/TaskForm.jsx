import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescript] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    createTask({
      title,
      description,
    });
    e.preventDefault();
    setTitle("");
    setDescript("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-600 p-10 mb-4 rounded-lg"
      >
        <h1 className="text-2xl font-bold text-white mb-4 text-center">
          Crea tu tarea
        </h1>
        <input
          placeholder="Escribe una tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 rounded-sm text-center"
        />

        <textarea
          placeholder="Escribe una descripción..."
          onChange={(e) => setDescript(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full rounded-sm text-center mb-2"
        ></textarea>
        <button className="bg-indigo-400 hover:bg-indigo-600 hover:text-zinc-200 px-4 py-2 text-lg text-white rounded-md">
          Save
        </button>
      </form>
    </div>
  );
}
export default TaskForm;
