import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Balance = () => {
  const { transaction } = useContext(GlobalContext);

  const amount = transaction.map(tran => tran.amount);
  
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
  return (
      <div>
          <h4>Your Balance</h4>
      <p>${ total}</p>
    </div>
  )
}

export default Balance;