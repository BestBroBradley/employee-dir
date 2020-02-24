import React from 'react';
import { EmpCard } from "./components/EmpCard.js"
import { Header } from "./components/Header.js"
import { SearchForm } from "./components/SearchForm.js"
import { employees } from "./data/employees.js"


function App() {
  console.log(employees)
  return (
    <>
    <Header />
    <SearchForm />
    <div className="row" style={{justifyContent: "center"}}>
      {employees.map((employee) => 
      <EmpCard
      key={employee.id}
      name={employee.name}
      department={employee.department}
      email={employee.email}
      phone={employee.phone}
      />)}
    </div>
    </>
  );
}

export default App;
