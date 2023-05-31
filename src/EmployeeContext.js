import React, { useState, createContext, useEffect } from "react";
import data from "./data/employees.json";

export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(data);
  }, []);

  return (
    <EmployeeContext.Provider value={[employees, setEmployees]}>
      {props.children}
    </EmployeeContext.Provider>
  );
};
