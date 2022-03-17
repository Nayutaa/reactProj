import react, {useState} from "react";
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const [selectedYear, setSelectedYear] = useState('');

    const onSelectHandler = (event) => {
        event.preventDefault();
        setSelectedYear(event.target.value)
        props.saveFilterYear(event.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={selectedYear} onChange={onSelectHandler}>
                    <option value='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter