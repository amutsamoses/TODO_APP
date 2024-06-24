export type FilterType = "all" | "active" | "completed";

// interface for todo item
export interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

//crrating action types
export type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "CLEAR_COMPLETED" }
  | { type: "EDIT_TODO"; payload: { id: number; text: string } }
  | { type: "SET_FILTER"; payload: FilterType };

// initial state
export const initialState: {
  todos: TodoType[];
  filter: FilterType;
} = {
  todos: [],
  filter: "all",
};
