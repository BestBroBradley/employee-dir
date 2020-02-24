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
    <EmpCard />
    </>
  );
}

export default App;
