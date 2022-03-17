import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css"
import card from "../UI/Card";
import {useState} from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList"
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


    return (
        <Card className="expenses">
            <ExpenseFilter filteredYear={filteredYear} saveFilterYear={saveFilterYear}/>
            <ExpensesChart expenses={inlist}/>
            <ExpensesList inlist = {inlist}/>
        </Card>
    );
}

export default ExpenseItemList;