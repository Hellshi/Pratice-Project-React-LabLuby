import React, { useState } from "react";

function CreateUserForm({ onSaveUser }) {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const handleInputName = (e) => {
    setUserName(e.target.value);
  };

  const handleInputAge = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: userName,
      age: age,
    };

    if (user.name.trim().length === 0 || user.age.trim().length === 0) {
      alert("Please type a name and age to be stored");
      return;
    }

    if (user.age < 0) {
      alert(`${user.age} is not valid`);
      return;
    }

    onSaveUser(user);
    setUserName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit} className="create-a-user-form">
      <label>Username</label>
      <input onChange={handleInputName} value={userName} type="text" />

      <label>Age(Years)</label>
      <input type="number" onChange={handleInputAge} value={age} />
      <button type="submit">Add A User</button>
    </form>
  );
}

export default CreateUserForm;
