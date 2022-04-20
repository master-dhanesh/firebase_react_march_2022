import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div>
      <div className="mt-5 p-5 container alert alert-dark">
        <h1>This is Homepage of PWA</h1>
        <p>
          User ID : {user && user.userId} <br /> User Title:{" "}
          {user && user.title} <br />
          Completed: {user && user.completed}
        </p>
      </div>
    </div>
  );
};

export default App;
