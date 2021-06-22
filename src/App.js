import React, { useState } from "react";
import "./Styles/App.scss";
import CreateAUser from "./Components/CreateUser";
import Data from "./UsersData";
import Users from "./Components/Users";

function App() {
  const UsersData = Data();
  const [users, setUsers] = useState(UsersData);

  const createAUser = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div className="App">
      <CreateAUser createAUser={createAUser} />
      <Users data={users} />
    </div>
  );
}

export default App;
