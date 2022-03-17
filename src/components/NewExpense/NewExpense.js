import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseDate = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseData(expenseDate);
        setFormState(false);
    }
    const [formState, setFormState] = useState(false);

    const addExpenseOnclickHandler = (event) => {
        setFormState ((le) => !le);
    }
    const cancelOnClickHandler = (event) => {
        setFormState (() => false);
    }


    return(
        <div className="new-expense">
            {formState && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} formState={formState} addExpenseOnclickHandler={addExpenseOnclickHandler} cancelOnClickHandler={cancelOnClickHandler}/>}
            {!formState && <button onClick={addExpenseOnclickHandler}>Add Expense</button>}
        </div>

    );
}

export default NewExpense;