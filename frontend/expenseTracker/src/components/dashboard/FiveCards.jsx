import React, { useEffect, useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";
import { monthAtom } from './atom';
import Update from '../Update';
import { Card, Spinner, Container } from 'react-bootstrap';

function FiveCards() {
  const [month, setMonth] = useRecoilState(monthAtom);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/user/display/param", {
        method: "POST",
        body: JSON.stringify({ month: month }),
        headers: { "Content-Type": 'application/json' }
      });

      if (response.ok) {
        const result = await response.json();
        setTimeout(() => {
          setData(result.allExpenses !== "null" ? result : null);
          setIsLoading(false);
        }, 1000); // Adding a 1 second delay
      } else {
        console.error("Fetch error: ", response.statusText);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Fetch error: ", error);
      setIsLoading(false);
    }
  }, [month]);

  useEffect(() => {
    fetchData();
  }, [month, fetchData]);

  const renderExpenseCard = (expense) => (
    <Card key={expense.id} className='mb-3 shadow-sm'>
      <Card.Body className='d-flex align-items-center justify-content-between' style={{ backgroundColor: expense.amount > 0 ? "#d4edda" : "#f8d7da" }}>
        <div className='d-flex align-items-center'>
          {expense.amount > 0 ? (
            <FaArrowAltCircleDown size={40} className='text-success mx-3' />
          ) : (
            <FaArrowAltCircleUp size={40} className='text-danger mx-3' />
          )}
        </div>
        <div className='flex-grow-1 mx-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='fs-4 text-info'>{expense.amount}</div>
            <div className='fs-4 text-dark font-weight-bold'>{expense.category}</div>
          </div>
          <div className='fs-5 text'>{expense.description}</div>
        </div>
        <div className='d-flex flex-column align-items-end'>
          <div className='text-muted mb-2 mt-2' >{`${expense.date}-${expense.month}-${expense.year}`}</div>
          <IoMdCash size={30} className='text-primary'/>
        </div>
      </Card.Body>
    </Card>
  );

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-10">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container>
      {data ? data.allExpenses.map(renderExpenseCard) : <div>No data available</div>}
    </Container>
  );
}

export default FiveCards;
