import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import UserTable from "./UserTable";

const Users = () => {
  const [users, setUsers] = useState([]);

  const handleRegistration = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <RegistrationForm handleRegistration={handleRegistration} />
      <UserTable users={users} />
    </div>
  );
};

export default Users;
