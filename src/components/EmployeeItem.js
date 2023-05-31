import React, { useContext } from "react";
import { EmployeeContext } from "../EmployeeContext";

const EmployeeItem = ({ employee }) => {
  const [employees, setEmployees] = useContext(EmployeeContext);

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div>
      <h2>{employee.name}</h2>
      <p>Age: {employee.age}</p>
      <p>Occupation: {employee.occupation}</p>
      <p>Salary: {employee.salary}</p>
      <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
    </div>
  );
};

export default EmployeeItem;
