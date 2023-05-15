import { useGlobalState } from "../context/GlobalState"
import {TransactionItem} from "./TransactionItem"

function TransactionList() {
  const {transactions} = useGlobalState()

  return (
    <>
      <h3 className="">Transactions History</h3>
      <ul>
        {
          transactions.map(transaction => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))
        }
      </ul>
    </>
  )
}

export default TransactionList

// h3 text-slate-300 text-xl font-bold w-full