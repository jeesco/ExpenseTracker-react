import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {

  const {transactions} = useGlobalState() 
  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
                  .filter(item => item > 0)
                  .reduce((acc, item) => (acc += item), 0)

  const expense = amounts
                    .filter(item => item < 0)
                    .reduce((acc, item) => (acc += item), 0) * -1

  return (
    <div className="incomeExpenses-container">
      <div className="">
        <h4>Incomes:</h4>
        <p>${income}</p>
      </div>
      <div className="">
        <h4>Expenses:</h4>
        <p>${expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses


// 2divs flex justify-between my-2