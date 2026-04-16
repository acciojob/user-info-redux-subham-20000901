import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail } from "../State/userSlice";
import "./../styles/App.css";

const App = () => {
  const { name, email } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>User Information</h1>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
      /><br/><br/>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
      />
      <div className="output">
        <h3>Current values in store:</h3>
        <p>Name- {name}</p>
        <p>Email- {email}</p>
      </div>
    </div>
  );
};

export default App;
