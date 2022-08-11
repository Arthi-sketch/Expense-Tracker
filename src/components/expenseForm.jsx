import react, { useState } from "react";

function ExpForm(props)
{
    const [count, setCount] = useState(4);  //inorder to generate new ID

    const [expense, setExp]=useState({
        title: "",
        amount: "",
        id: "",
        date: ""
    });
                                        
    function titleHandler(event)
    {
        setExp(
        {   ...expense, 
            title: event.target.value
        })
    }

    function amountHandler(event)
    {
        setExp(
        {   ...expense, 
            amount: event.target.value
        })
    }

    function DateHandler(event)
    {
        setExp(
        {   ...expense, 
            date: new Date(event.target.value)
        })
    }

    function submitExpense(event)
    {
        event.preventDefault();
        setExp(
        {   ...expense, 
            id: setCount(count+1)
        }) 
        props.onNewExpense(expense);
        props.switch(false);
        
    }
    console.log("expense.length "+ expense.length);
    return(
    <form >
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="text" onChange={amountHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" onChange={DateHandler}/>
        </div>

        <div className="new-expense__actions">
            <button type="submit" onClick={submitExpense}>Add Expense</button>
            <button type="submit">Cancel</button>
        </div>       
    </div>
    </form>
    )
}

export default ExpForm;