import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css"
import card from "../UI/Card";
import {useState} from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
const ExpenseItemList = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const [inlist, setInlist] = useState(props.itemList)

    const filterYear = (selectedYear) => {
      let newList = props.itemList.filter((item) => item.date.getFullYear()==selectedYear)
        setInlist(() => newList);
    }
    const saveFilterYear = (selectedFilterYear) => {
        setFilteredYear(() => selectedFilterYear);
        filterYear(selectedFilterYear);
        console.log(inlist);
    }

    let expensesContent = <p>No Expenses Found</p>;

    if (inlist.length > 0) {
        expensesContent = inlist.map((item) => (
            <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
        ))
    }

    return (
        <Card className="expenses">
            <ExpenseFilter filteredYear={filteredYear} saveFilterYear={saveFilterYear}/>
            {expensesContent}
        </Card>
    );
}

export default ExpenseItemList;