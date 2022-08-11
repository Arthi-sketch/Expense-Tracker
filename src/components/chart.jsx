import react from "react";
import ChartBar from "./chartBar";

function Chart(props)
{
    let dataArr=props.dataPoints.map(dataPoint => dataPoint.value);
    let totalMax=Math.max(...dataArr);
   
     return (<div className="chart">
        {
          props.dataPoints.map(data =>
            <ChartBar key={data.id}
            value={data.value}
            maxValue={totalMax}
            label={data.label}/>
            )
        }
    </div>)
}

export default Chart;