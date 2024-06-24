import React from "react";
import { TodoType, Action, FilterType } from "../types";
import "./footer.scss";

interface FooterProps {
  todos: TodoType[];
  filter: FilterType;
  dispatch: React.Dispatch<Action>;
}

function Footer({ todos, dispatch }: FooterProps) {
  const remaining = todos.filter((todo) => !todo.completed).length;
  const completed = () => dispatch({ type: "CLEAR_COMPLETED" });
  const setFilter = (filter: FilterType) =>
    dispatch({ type: "SET_FILTER", payload: filter });

  return (
    <footer>
      <span>{remaining} items left</span>

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={completed}>Clear completed</button>
    </footer>
  );
}

export default Footer;
