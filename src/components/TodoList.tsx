import React, { useState } from "react";
import { TodoType, Action } from "../types";
import "./todolist.scss";

interface TodoListProps {
  todos: TodoType[];
  dispatch: React.Dispatch<Action>;
}

function TodoList({ todos, dispatch }: TodoListProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id: number) => {
    dispatch({ type: "EDIT_TODO", payload: { id, text: editText } });
    setEditingId(null);
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          {editingId === todo.id ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={() => saveEdit(todo.id)}
              onKeyDown={(e) => e.key === "Enter" && saveEdit(todo.id)}
              autoFocus
            />
          ) : (
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
            >
              {todo.text}
            </span>
          )}
          <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
          <button
            onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
