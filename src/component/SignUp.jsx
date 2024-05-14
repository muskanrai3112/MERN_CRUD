import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(username, password);
    const data = { name: username, password: password, email: email };
    axios
      .post("http://localhost:4000/signUp", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.code == 200) {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
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
          height: "100vh",
          width: "70%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            width: "71%",
            backgroundColor: "darkslategray",
            height: "50vh",
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
            SignUp page
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
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /> <br />
          <input
            style={{
              padding: "12px",
              margin: "10px",
              width: "23vw",
              boxShadow: "10px 10px 5px black",
              borderRadius: "11px",
            }}
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /> <br />
          <input
            style={{
              padding: "12px",
              margin: "10px",
              width: "23vw",
              boxShadow: "10px 10px 5px black",
              borderRadius: "11px",
            }}
            type="email"
            placeholder="email@"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /> <br />
          <button
            style={{
              width: "9vh",
              height: "4vh",
              borderRadius: "9px",
              boxShadow: " 10px 10px 5px",
            }}
            onClick={handleSignUp}
          >
            SignUp
          </button>
          <br /> <br />
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "small",
            }}
            to="/login"
          >
            Go to the login page
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
