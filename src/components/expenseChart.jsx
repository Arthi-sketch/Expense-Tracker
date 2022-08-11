import react from "react";
import Chart from "./chart";

function ExpenseChart(props)
{
    const chartData=[
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0}
    ];
    // for (const exp of props.expenses)   ----> in 'for of' loop
    // {
    //     const expMonth=exp.date.getMonth();
    //     console.log("expMonth: "+ expMonth);
    //     chartData[expMonth].value+=exp.amount;
    // }
    props.expenses.map(exp =>
    {
        let expMonth=exp.date.getMonth();
        console.log("expMonth: "+ expMonth);
        chartData[expMonth].value+=exp.amount;
    });

    // props.expenses.forEach(exp => {        -----> in 'for each' loop
    //     let expMonth=exp.date.getMonth();
    //     console.log("expMonth: "+ expMonth);
    //     chartData[expMonth].value+=exp.amount;
    // });
    return <Chart dataPoints={chartData}/>;
}

export default ExpenseChart;