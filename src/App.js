import React, { useEffect, useState } from "react";
import axios from "./axios";

const App = () => {
  const [User, setUser] = useState(null);

  useEffect(() => {
    LoadUser();
  }, []);

  const LoadUser = () => {
    axios
      .get("/api/v1/user/me", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err.response));
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    const logindata = {
      email: email.value,
      password: password.value,
    };
    axios
      .post("/api/v1/user/login", logindata)
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("token", data.token);
      })
      .catch((err) => console.log(err.response));
  };

  const GetHomePage = () => {
    axios
      .get("/api/v1/user", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err.response));
  };

  const Logout = () => {
    axios
      .get("/api/v1/user/logout")
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <input type="submit" />
      </form>
      {/* <button onClick={GetHomePage}>Get HomePage</button> */}
      <button onClick={GetHomePage}>Get HomePage</button>
      <button onClick={Logout}>Logout User</button>
    </div>
  );
};

export default App;
