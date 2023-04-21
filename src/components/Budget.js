import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
  const { dispatch } = useContext(AppContext);
  const [budget, setBudget] = useState(2000);
 

  const handleChange = (e) => {
    const newBudget = parseInt(e.target.value, 10);
    if (newBudget > 20000) {
      alert('Budget cannot be more than 20,000');
      return;
    } else if (newBudget < 2000) {
      alert('Budget cannot be less than Spending');
      return;
    }
    setBudget(newBudget);
    dispatch({ type: 'SET_BUDGET', payload: newBudget });
  };

 

  return (
    <div className='alert alert-secondary'>
      <span>Budget:£</span>
      <input type='number' value={budget} onChange={handleChange} min={2000} max={20000} step='10' />
    </div>
  );
};

export default Budget;
