import axios from "axios";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleOnLogin = (e) => {
    e.preventDefault();
    if (username === 0 || password === 0) {
      setError(true);
    } else {
      const data = {
        name: username,
        password: password,
      };

      axios
        .post("http://localhost:4000/login", data)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            localStorage.setItem("data", res?.data);
            navigate("/todo");
          }
        })
        .catch((err) => console.log(err, "error"));
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          width: "50%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            width: "71%",
            backgroundColor: "darkslategray",
            height: "40vh",
            boxShadow: "10px 5px 5px 2px black",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              color: "white",
              margin: "0px",
              textAlign: "left",
              padding: "10px 15px",
            }}
          >
            Login page
          </h1>
          <input
            style={{
              padding: "12px",
              margin: "15px",
              width: "23vw",
              boxShadow: "10px 10px 5px black",
              borderRadius: "11px",
            }}
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          {error ? (
            <span style={{ color: "red" }}>the field cant be empty </span>
          ) : (
            ""
          )}
          <br /> <br />
          <input
            style={{
              padding: "12px",
              margin: "10px",
              width: "23vw",
              boxShadow: "10px 10px 5px black",
              borderRadius: "11px",
            }}
            type="password"
            placeholder="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error ? (
            <span style={{ color: "red" }}>the field cant be empty </span>
          ) : (
            ""
          )}
          <br /> <br />
          <button
            style={{
              width: "9vh",
              height: "4vh",
              borderRadius: "9px",
              boxShadow: " 10px 10px 5px",
            }}
            onClick={handleOnLogin}
          >
            login
          </button>
          <br /> <br />
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "small",
            }}
            to="/signUp"
          >
            Go to the SignUp page
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
