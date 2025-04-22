import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, edit } from "./action";

function Todo({ id, title }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    if (newTitle.trim()) {
      dispatch(edit({ id, title: newTitle }));
      setIsEditing(false);
    }
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{title}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button
        onClick={handleDelete}
        style={{ marginLeft: "5px", color: "red" }}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
