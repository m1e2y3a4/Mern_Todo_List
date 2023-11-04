import Create from "./Create";
import { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="home">
      <h2>Todo-List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>NO RECORDS</h2>
        </div>
      ) : (
        todos.map((todo) => <div>{todo}</div>)
      )}
    </div>
  );
};

export default Home;
