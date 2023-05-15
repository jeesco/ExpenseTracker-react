import { useGlobalState } from "../context/GlobalState"

export function TransactionItem({ transaction }) {

  const {deleteTransaction} = useGlobalState()

  return (
    <li className='item-list'>
      <div  className='item-container'>
        <p className="">{`${transaction.description}:`}</p>
        <span>{`$${transaction.amount}  `}</span>
        <button 
          className="item-button"
          onClick={() => {
          deleteTransaction(transaction.id)
        }}>
        Delete
        </button>
      </div>
    </li>
  )
}

export default TransactionItem


// li bg-zinc-600 text-white p-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center

// p text-sm

// button bg-slate-50 text-black pl-1 pr-1 rounded-lg