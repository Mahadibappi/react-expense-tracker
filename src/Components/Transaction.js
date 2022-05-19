import React, { useContext } from 'react'
import { GlobalContext } from './../Context/GlobalState';

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const {deleteTransaction}=useContext(GlobalContext)

  return (
      <div className={transaction.amount <0 ? 'minus' :'plus'}>
           <li >
                  {transaction.text}  <span>{sign}$ {Math.abs(transaction.amount)} </span> <button onClick={()=> deleteTransaction(transaction.id)} className='delete-btn'>X</button>
              </li>
    </div>
  )
}

export default Transaction;