import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseItemList from "./components/Expenses/ExpenseItemList";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import {useState} from "react";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const saveExpenseDataHandler = (newExpenseData) => {
    setExpenses((list) => [newExpenseData, ...list]);
    console.log(expenses);
  };

  return (
      <Card>
        <div className="App">
          {/*<h2>Let's gets started!</h2>*/}
          <NewExpense onAddExpenseData = {saveExpenseDataHandler}/>
          <ExpenseItemList itemList={expenses}/>
          {/*<ExpenseItemList title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>*/}
        </div>
      </Card>
  );
}





export default App;
