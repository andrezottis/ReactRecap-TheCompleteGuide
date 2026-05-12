import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ userInputOnComp }) {
  {
    const resultsData = calculateInvestmentResults(userInputOnComp);
    
    console.log(resultsData);

    return <p>Results ...</p>;
  }
}
