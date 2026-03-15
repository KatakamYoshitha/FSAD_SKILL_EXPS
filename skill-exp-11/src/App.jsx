import React, { useState } from "react";
import Dashboard from "./components/Dashboards.jsx";
import LocalUserList from "./components/LocalUserList.jsx";
import UserList from "./components/UserList.jsx";
import FakePostList from "./components/FakePostList.jsx";
import "./App.css";

function App() {

  const [page, setPage] = useState("home");

  return (
    <div>

      <h1>React API Integration Demo</h1>

      {page === "home" && <Dashboard setPage={setPage} />}
      {page === "local" && <LocalUserList />}
      {page === "api" && <UserList />}
      {page === "posts" && <FakePostList />}

      {page !== "home" && (
        <button className="back-btn" onClick={() => setPage("home")}>
          Back to Home
        </button>
      )}

    </div>
  );
}

export default App;