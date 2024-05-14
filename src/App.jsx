import { useEffect, useState } from "react";
import Todo from "./component/todo";
import axios from "axios";
import Login from "./component/login";
import SignUp from "./component/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState();
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const getAllTodo = () => {
      axios
        .get("http://localhost:4000/")
        .then((res) => {
          //   console.log(res.data);
          setTodo(res.data);
          setIsDeleted(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllTodo();
  }, [isDeleted, isUpdating]);

  const addTodo = () => {
    axios
      .post(`http://localhost:4000/save`, { text })
      .then((res) => {
        setText(res.data.text);
        setText("");
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };
  const updateTodo = (todoId) => {
    axios
      .post(`http://localhost:4000/update`, { _id: todoId, text })
      .then((res) => {
        console.log(res.data.text);
        setText(res.data.text);
        setIsUpdating(false);
        setText("");
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };
  const deleteTodo = (_id) => {
    axios
      .post(`http://localhost:4000/delete`, { _id })
      .then((data) => {
        setIsDeleted(true);
        setTodo(data.data.text);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };
  const isdone = () => {
    alert("completed");
  };
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/todo"
            element={
              <div>
                <h1> TODO LIST</h1>
                <div className="inputText">
                  <input
                    type="text"
                    placeholder="add todo"
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                  <div
                    className="add"
                    onClick={isUpdating ? () => updateTodo(todoId) : addTodo}
                  >
                    {isUpdating ? "Update" : "Add"}
                  </div>
                </div>
                <div className="list">
                  {todo !== undefined &&
                    todo.length > 0 &&
                    todo.map((item) => (
                      <Todo
                        key={item._id}
                        text={item.text}
                        updateMode={() => updateMode(item._id, item.text)}
                        deleteTodo={() => deleteTodo(item._id)}
                        isCompleted={() => isdone(item._id)}
                      />
                    ))}
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
