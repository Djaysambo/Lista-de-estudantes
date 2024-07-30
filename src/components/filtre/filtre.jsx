import React, { useState } from "react";
import { users } from "../../data/users";

const UserList = () => {
  const [userList, setUserList] = useState(users); 
  const [filter, setFilter] = useState(""); 

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const removeUser = (id) => {
    const updatedUsers = userList.filter(user => user.id !== id); 
    setUserList(updatedUsers); 
  };

  const filteredUsers = userList.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main>
      <div style={{ backgroundColor: "black", textAlign: "center", padding: "20px" }}>
        <h1 style={{ color: "aqua" }}>Lista de Usuários</h1>
        <input
          type="text"
          placeholder="Filtrar por nome"
          value={filter}
          onChange={handleFilterChange}
          style={{ borderRadius: "20px", textAlign: 'center', padding: "5px", marginBottom: "20px" }}
        />
        <div style={{ color: "aqua" }}>
          <ol style={{ listStyleType: "none", padding: 0 }}>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <li
                  key={user.id}
                  style={{
                    backgroundColor: "lightblue",
                    padding: "10px",
                    margin: "10px auto",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "80%",
                    maxWidth: "600px"
                  }}
                >
                  <a href={user.linkUrl} style={{ textDecoration: "none", color: "black" }}>{user.name}</a>
                  <button
                    onClick={() => removeUser(user.id)}
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
              ))
            ) : (
              <li style={{ color: "lightgrey" }}><h1 className="bg-red-60 text-lg font-bold">Nenhum usuário encontrado.</h1></li>
            )}
          </ol>
        </div>
      </div>
    </main>
  );
};

export default UserList;