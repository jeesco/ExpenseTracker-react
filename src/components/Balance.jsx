import { useGlobalState } from "../context/GlobalState"

function Balance() {

  const {transactions} = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)

  const total = amounts.reduce((acc, item) => (acc + item), 0)
  
  return (
    <div className="balance">
      <h1>Your balance:</h1>
      <h2 className="">${total}</h2>
    </div>
  )
}

export default Balance


// div1 flex justify-between

// h2 text-2xl font-bold