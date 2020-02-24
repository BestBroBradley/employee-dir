import React from 'react';
import { EmpCard } from "./components/EmpCard.js"
import { Header } from "./components/Header.js"
import { SearchForm } from "./components/SearchForm.js"

function App() {
  return (
    <>
    <h1>App</h1>
    <Header />
    <SearchForm />
    <EmpCard />
    </>
  );
}

export default App;
