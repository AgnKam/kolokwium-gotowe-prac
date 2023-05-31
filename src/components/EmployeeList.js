import React, { useState, useContext, useMemo, useEffect } from "react";
import { EmployeeContext } from "../EmployeeContext";
import EmployeeItem from "./EmployeeItem";
import '../css/EmployeeList.css';

const EmployeeList = () => {
  const [employees] = useContext(EmployeeContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [averageSalary, setAverageSalary] = useState(0);
  const [averageAge, setAverageAge] = useState(0);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = useMemo(() =>
    employees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [employees, searchTerm]
  );

  useEffect(() => {
    const totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);
    const totalAge = employees.reduce((acc, curr) => acc + curr.age, 0);

    setAverageSalary((totalSalary / employees.length) || 0);
    setAverageAge((totalAge / employees.length) || 0);

  }, [employees]);

  return (
    <div>
      <h2 style={{ color: "navy" }}>Statystyki: </h2>
      <p>Average Salary: {averageSalary.toFixed(2)}</p>
      <p>Average Age: {averageAge.toFixed(2)}</p>
      <h2 style={{ color: "navy" }}>Znajdź pracownika:</h2>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by name..." />
      <br/>
      <h2 style={{ color: "navy" }}>Lista pracowników: </h2>
      {filteredEmployees.map((employee) => (
        <EmployeeItem key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
