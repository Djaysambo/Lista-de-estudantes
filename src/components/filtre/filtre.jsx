import React, { useState } from "react";
import { users } from "../../data/users";
import Footer from "../footer/footer";

const UserList = () => {
  const [filter, setFilter] = useState("");

   const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const removeUser = (users) => {
    const updatedUsers = [...users];
    updatedUsers.splice(users, );
    setUsers(updatedUsers);
  };

  const filteredUsers = users.filter((user) =>
    user.linkLabel.toLowerCase().includes(filter.toLowerCase())
  );

  return (
  <>
  <main>
    <div style={{ backgroundColor: "black", textAlign: "center" }}>
      <div >
        <h1 style={{ color: "aqua" }}>Lista de Usuários</h1>
        <input
          type="text"
          placeholder="Filtrar por nome"
          value={filter}
          onChange={handleFilterChange}
          style={{ width: "600px", height: "30px", borderRadius: "20px ", textAlign:'center' }}
        />
      </div>
      <div style={{ color: "aqua", }}>
        <ol >
          {filteredUsers.map((user, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "lightblue",
                padding: "5px",
                margin: "10px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <a href={user.linkUrl}>{user.linkLabel}</a>
              <button
                onClick={() => removeUser(index)}
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Remover
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>

  </main>
   </>
    
  );
};

export default UserList;
