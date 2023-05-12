import { useGlobalState } from "../context/GlobalState"

function Balance() {

  const {transactions} = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)

  const total = amounts.reduce((acc, item) => (acc + item), 0)
  
  return (
    <div className="flex justify-between">
      <h1>Your balance:</h1>
      <h2 className="text-2xl font-bold">${total}</h2>
    </div>
  )
}

export default Balance