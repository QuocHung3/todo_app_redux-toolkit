import "./App.css";
import { useEffect, useState } from "react";
import nextId from "react-id-generator";
import { useDispatch, useSelector } from "react-redux";
import { todoSlice, fetchTodos, addNewTodo } from "./reducer/TodoSlice";
import { filtersSlice } from "./reducer/FiltersSlice";
import { todosRemainingSelector } from "./selector/selector";
import { setupServer } from "./fakeAPIs";

setupServer();

const App = () => {
  const [todo, setTodo] = useState();
  const [search, setSearch] = useState();

  const dispatch = useDispatch();
  let todoData = useSelector(todosRemainingSelector);
  const idRan = nextId();

  useEffect(() => {
    try {
      dispatch(fetchTodos());
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleAddTodo = () => {
    dispatch(
      addNewTodo({
        id: idRan,
        name: todo,
      })
    );
  };

  const handleSearchTodo = (value) => {
    dispatch(filtersSlice.actions.searchFiltersChange(value));
  };

  return (
    <div className="App">
      <div className="container ">
        <div className="leftSection">
          <div>
            <label>Todo</label>
            <input
              value={todo}
              type="text"
              onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add todo</button>
          </div>

          <div>
            <label>Search</label>
            <input
              value={search}
              type="text"
              onChange={(e) => handleSearchTodo(e.target.value)}
            />
          </div>
        </div>
        <div className="rightSection">
          <ul>
            {todoData &&
              todoData.map((todo) => <li key={todo.id}>{todo.name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
