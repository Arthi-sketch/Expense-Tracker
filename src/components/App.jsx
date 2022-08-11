import React, { useState } from "react";
import Card from "./card";
import ExpenseItem from "./expenseItem";
import Expenses from "./object";
import ExpForm from './expenseForm';
import ExpensesFilter from "./expenseFilter";
import ExpenseChart from "./expenseChart";

function App() {
                                         
  const [expenses, addExpense]= useState([...Expenses]);
  
  function AddCard(newExpense)   
  {
    addExpense((prev)=> 
    {              
      return ([...prev, newExpense]);
    })
    
    console.log("expense " + newExpense);
  }
   
  const [filteredYear, setFilteredYear] = useState('2020');
  
  function filterChangeHandler(selectedYear)
  {
    setFilteredYear(selectedYear);  
  }

  let expesesWithFilteredYear=expenses.filter(expense=>
    {
      return filteredYear==="all"? expense : expense.date.getFullYear()==filteredYear
    })
  
  let [isFormAppear, setAppear]=useState(false);
  function formAppear()
  {
    setAppear(true);
  }

  function formAppear2(boolval)
  {    
    console.log("boolean event: " + boolval);
    setAppear(boolval);
  }
  return (
    <div>
      <Card className="new-expense">
        {!isFormAppear && <button type="submit" onClick={formAppear}>Add Expense</button>}
        {isFormAppear && <ExpForm onNewExpense={AddCard} switch={formAppear2}/>}
      </Card>
      
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />    
        <ExpenseChart expenses={expesesWithFilteredYear} />
        {expesesWithFilteredYear.length==0 && <h2>No Expense found for the filtered Year</h2>}
        {expesesWithFilteredYear.map(expense =>
          (<ExpenseItem 
            key={expense.id}
            amount={expense.amount}
            id={expense.id}
            title={expense.title}
            date={expense.date}
            />
          )
          )}
    </Card>
    </div>
    
  );
}

export default App;
