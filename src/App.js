import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./action";
import Todolist from "./Todolist";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleTodo = () => {
    if (task.trim()) {
      dispatch(add({ title: task }));
      setTask("");
    }
  };

  return (
    <div className="App">
      <h3>Redux ToDo</h3>
      <input
        type="text"
        placeholder="Enter todo..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleTodo}>Add</button>
      <Todolist />
    </div>
  );
}
