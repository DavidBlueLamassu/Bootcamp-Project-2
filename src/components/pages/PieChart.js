import { useContext } from "react";
import { DiagramMaker } from "../../App.js";import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
import DemoIncomePieChartKeyed from "./assets/DemoIncomePieChartKeyed.json";
import DemoExpensesPieChartKeyed from "./assets/DemoExpensesPieChartKeyed.json";
import IncomeLegend from "./DemoIncomeLegend.js";
import ExpensesLegend from "./DemoExpensesLegend.js";

const styles = {
  chart: {
    height: "250px",
    width: "250px"
  }
}

function Chart() {
  const [pieState] = useContext(DiagramMaker);
  return (
    <div>
      <h1>Pie Charts</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <PieChart
        style={styles.chart} data={pieState.pieArrayIncome}
      />
      <h4>Income Breakdown:</h4>
      {legendMakerIncome()}
      <PieChart
      style={styles.chart} data={pieState.pieArrayExpenses}
      />
      <h4>Expenses Breakdown:</h4>
      {legendMakerExpenses()}
    </div>
  );
}

function legendMakerIncome() {
  
  return ( <div style={styles.legendContainer}>
    {
    DemoIncomePieChartKeyed.map(function(currentObject) {
         return <IncomeLegend 
          key={currentObject.id}
          title={currentObject.title} 
          value={currentObject.value}
          color={currentObject.color} />
    })
    }
  </div>
  )
}

function legendMakerExpenses() {
  return ( <div style={styles.legendContainer}>
    {
    DemoExpensesPieChartKeyed.map(function(currentObject) {
          return <ExpensesLegend 
          key={currentObject.id}
          title={currentObject.title} 
          value={currentObject.value}
          color={currentObject.color} />
    })
    }
  </div>
  )
}

export default Chart;
