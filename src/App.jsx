import { GlobalProvider } from "./context/GlobalState"
import Balance from "./components/Balance"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"
import IncomeExpenses from "./components/IncomeExpenses"
import ExpenseChart from "./components/ExpenseChart"


function App() {
  return (
    <GlobalProvider>
      {/* <div className="">*/}
        <div className="main-container">
          <div className="flex-container">
            <div>
              <h1 className="">Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="last-section">
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      {/* </div> */}
    </GlobalProvider>
  )
}

export default App


// div1 bg-zinc-950 text-white h-screen flex justify-center items-center

// div 2 container mx-auto w-3/5

// div 3 bg-zinc-800 p-10 rounded-lg flex gap-x-2

// div 4 ---

// h1 text-4xl font-bold

// div 5 flex flex-col flex-1