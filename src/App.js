import React from 'react';
import { Header } from './Components/Header';
import Balance from './Components/Balance';
import './App.css';
import { IncomeExpense } from './Components/IncomeExpense';
import AddTransaction from './Components/AddTransaction';
import TransactionList from './Components/TransactionList';
import { GlobalProvider } from './Context/GlobalState';



function App() {
  return (
    <GlobalProvider>     
      <Header />

      <div className="container">       
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
       
      </div>
  
   </GlobalProvider> 
  );
};


export default App;