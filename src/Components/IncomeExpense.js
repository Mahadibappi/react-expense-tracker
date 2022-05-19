import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const IncomeExpense = () => {
  const { transaction } = useContext(GlobalContext);
  const amount = transaction.map(tran => tran.amount);

  const income = amount
    .filter((item) => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  
  const expense = (amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2)

  return (
    <div className='incomeexpense'>
      <div >
        <h3>INCOME</h3>
        <p className="income">${income}</p>
      </div>
      <div >
        <h3>EXPENSE</h3>
        <p className="expense">${expense}</p>
      </div>
    </div>
  )
};
