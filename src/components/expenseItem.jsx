import React, { useState } from "react";
import Card from "./card";

function ExpenseItem(props)
{
    let [title, setTitle]=useState(props.title);
    
    return (<Card className="expense-item">
        <Card className="expense-date">
            <div className="expense-date__month">{props.date.toLocaleString('en-us', { month: 'long' })}</div>
            <div  className="expense-date__year">{props.date.getFullYear()}</div>
            <div className="expense-date__day">{props.date.getDate()}</div>
        </Card>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">₹.{props.amount}</div>
        </div>
    </Card>);
}

export default ExpenseItem;