import React, { useState } from "react";
import { users } from "../../data/users";

const UserList = () => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.linkLabel.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "aqua" }}>Lista de Usuários</h1>
        <input
          type="text"
          placeholder="Filtrar por nome"
          value={filter}
          onChange={handleFilterChange}
          style={{ width: "600px", height: "30px", borderRadius: "20px" }}
        />
      </div>
      <div>
        <ol style={{ color: "aqua", width: "50%" }}>
          {filteredUsers.map((user, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "lightblue",
                padding: "5px",
                margin: "10px",
                borderRadius: "10px",

              }}
            >
              <a href={user.linkUrl}>{user.linkLabel}</a>
             </li>
          ))}
          </ol>
      </div>
    </div>
  );
};

export default UserList;
