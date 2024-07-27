import { Button, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { monthAtom, spendingAtom, incomeAtom } from './atom';
import { useRecoilState } from 'recoil';

function Input() {
  const [spendinga, useSpendingA] = useRecoilState(spendingAtom);
  const [incomea, useIncomeA] = useRecoilState(incomeAtom);
  const [selectedMonth, setSelectedMonth] = useRecoilState(monthAtom);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    fetch("http://localhost:3001/user/calculate", {
      method: "POST",
      body: JSON.stringify({
        username: "param",
        month: selectedMonth.toString()
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    }).then(
      async function (response) {
        const data = await response.json();
        console.log("hi shakya aagaya");
        console.log(data.expense);
        console.log("param feb ");
        console.log(selectedMonth);
        useSpendingA(data.expense);
        useIncomeA(data.income);
      }
    )
  }, [selectedMonth]);

  return (
    <div className="p-4 bg-light rounded my-4 shadow-sm">
      <Container className="border p-3 bg-white rounded shadow-sm">
        <Container className="d-flex align-items-center">
          <p style={{ fontSize: 17, marginRight: '10px', marginBottom: '0' }}>Enter the month</p>
          <DropdownButton 
            id="dropdown-basic-button" 
            onSelect={(eventKey) => { 
              setSelectedMonth(months.indexOf(eventKey) + 1); 
              console.log(selectedMonth);
            }} 
            title={months[selectedMonth - 1]} 
            className="ml-3"
          >
            {months.map((month, index) => (
              <Dropdown.Item eventKey={month} key={index}>{month}</Dropdown.Item>
            ))}
          </DropdownButton>
        </Container>
      </Container>
    </div>
  );
}

export default Input;
