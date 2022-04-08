import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  auth,
  addDoc,
  collection,
  firestore,
  getDocs,
} from "./firebase";

const App = () => {
  const [User, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          token: user.accessToken,
        });
        console.log("Session Restored");
      } else {
        console.log("No User Found!");
      }
    });
  }, []);

  const RegisterUser = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({ email: user.email, token: user.accessToken });
      })
      .catch((error) => console.log(error.code));
  };

  const LoginUser = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({ email: user.email, token: user.accessToken });
      })
      .catch((error) => console.log(error.code));
  };

  const Logout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((err) => console.log(err.code));
  };

  const CreateUser = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const name = e.target[1].value;
    const docRef = await addDoc(collection(firestore, "r6"), {
      email,
      name,
      avatar: null,
    });
    console.log(docRef);
  };

  const GetAllUsers = async () => {
    const qs = await getDocs(collection(firestore, "r6"));
    qs.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  };

  return (
    <div className="container mt-5">
      {User && (
        <div className="d-flex justify-content-between alert alert-success">
          <p>{User.email}</p>
          <button onClick={Logout} className="btn btn-danger">
            Logout
          </button>
        </div>
      )}

      <form onSubmit={RegisterUser}>
        <h3>Register</h3>
        <input type="email" name="email" placeholder="Email" /> <br /> <br />
        <input type="password" name="password" placeholder="Password" /> <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <form onSubmit={LoginUser}>
        <h3>Login</h3>
        <input type="email" name="email" placeholder="Email" /> <br /> <br />
        <input type="password" name="password" placeholder="Password" /> <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <form onSubmit={CreateUser}>
        <h3>Create User</h3>
        <input type="email" name="email" placeholder="Email" /> <br /> <br />
        <input type="text" name="name" placeholder="Name" /> <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <button onClick={GetAllUsers}>Get All Documents</button>
    </div>
  );
};

export default App;
