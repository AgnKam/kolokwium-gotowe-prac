import React, { useState, useContext } from "react";
import { EmployeeContext } from "../EmployeeContext";
import "../css/EmployeeForm.css";

const EmployeeForm = () => {
  const [employees, setEmployees] = useContext(EmployeeContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [salary, setSalary] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateAge = (e) => {
    setAge(+e.target.value);
  };

  const updateOccupation = (e) => {
    setOccupation(e.target.value);
  };

  const updateSalary = (e) => {
    setSalary(+e.target.value);
  };

  const addEmployee = (e) => {
    e.preventDefault();
    setEmployees(
      [...employees, { id: Date.now(), name: name, age: age, occupation: occupation, salary: salary }]
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
      }}
    >
      <form onSubmit={addEmployee}>
        <h2>Dodaj nowego pracownika:</h2>
        <input type="text" name="name" value={name} onChange={updateName} />
        <input type="number" name="age" value={age} onChange={updateAge} />
        <input type="text" name="occupation" value={occupation} onChange={updateOccupation} />
        <input type="number" name="salary" value={salary} onChange={updateSalary} />
        <button>Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
