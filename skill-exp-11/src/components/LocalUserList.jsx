import React, { useEffect, useState } from "react";

function LocalUserList() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch("/users.json")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error loading local users");
        setLoading(false);
      });

  }, []);

  if (loading) return <p className="message">Loading...</p>;
  if (error) return <p className="message">{error}</p>;

  return (
    <div className="container">
      <h2>Local Users</h2>

      {users.map(user => (
        <div className="card" key={user.id}>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>
        </div>
      ))}

    </div>
  );
}

export default LocalUserList;