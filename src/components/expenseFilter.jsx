import React from 'react';
 
const ExpensesFilter = (props) => {             //function ExpensesFilter(props) {
  const dropdownChangeHandler = (event) => {         //function dropdownChangeHandler(event) {
    props.onChangeFilter(event.target.value);
  };

  let dynamicYear = props.filterdate;
  console.log("drops dynamic date: "+ dynamicYear);

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {/* {console.log("drops dynamic date: "+ [...props.date.title] )} */}
          <option value='all'>All</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;