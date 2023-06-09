import {VictoryPie, VictoryLabel} from 'victory'
import { useGlobalState } from '../context/GlobalState'
import { useState } from 'react';
useState


function ExpenseChart() {
  // const [totalIncome, setTotalIncome] = useState(0)

  
  const {transactions} = useGlobalState()

  const totalIncome = transactions
                        .filter(transaction => transaction.amount > 0)
                        .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses = transactions
                        .filter(transaction => transaction.amount < 0)
                        .reduce((acc, transaction) => (acc += transaction.amount), 0)* -1;
                        

  const totalExpensePercentage = Math.round((totalExpenses / totalIncome) * 100)

  const totalIncomePercentage = 100 - totalExpensePercentage

  return (
    <VictoryPie
      data = {[
        {x: 'Expenses', y: totalExpensePercentage},
        {x: 'Incomes', y: totalIncomePercentage},
      ]}
      colorScale={['#e74c3c', '#2ecc71']}
      animate={{
      duration: 1000
      }}
        labels={({datum}) => `${datum.y}%`}
        labelComponent={<VictoryLabel 
        angle={45}
        style={{fill: 'white',
      }}
      className='expenses-chart'
      />}
      >
    </VictoryPie>
  )
}

export default ExpenseChart