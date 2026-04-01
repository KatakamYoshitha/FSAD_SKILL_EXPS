import React, { useState } from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {

  const [reload, setReload] = useState(false);

  const refresh = () => {
    setReload(!reload);
  };

  return (
    <div>

      <h1>Student Management System</h1>

      <AddStudent refresh={refresh} />

      <StudentList key={reload} />

    </div>
  );
}

export default App;