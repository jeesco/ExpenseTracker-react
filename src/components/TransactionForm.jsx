import { useState } from "react"
import { useGlobalState } from "../context/GlobalState"

function TransactionForm() {

  const {addTransaction} = useGlobalState()

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState()

  const onSubmit = (e) => {
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    })
    setAmount('')
    setDescription('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          type="text"
          placeholder="Enter description" 
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input 
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          type="number" 
          placeholder="0.00" 
          step="0.01"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full'>
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default TransactionForm