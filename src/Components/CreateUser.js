import React from "react";
import CreateUserForm from "./CreateUserForm";
import { v4 as uuid4 } from "uuid";

function CreateUser({ createAUser }) {
  const onSaveUser = (createdUser) => {
    const newUser = {
      ...createdUser,
      id: uuid4().toString(),
    };
    createAUser(newUser);
  };

  return (
    <div className="Create-a-user">
      <CreateUserForm onSaveUser={onSaveUser} />
    </div>
  );
}

export default CreateUser;
