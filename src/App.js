import React from "react";
import { EmployeeProvider } from "./EmployeeContext";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  return (
    <EmployeeProvider>
      <div className="App">
        <EmployeeForm />
        <EmployeeList />
      </div>
    </EmployeeProvider>
  );
}

export default App;
