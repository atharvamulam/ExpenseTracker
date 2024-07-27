import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";
import { spendingAll, incomeAll } from './allCards';
import { monthAtom } from './dashboard/atom';
import Container from 'react-bootstrap/Container';
import { useRecoilState } from 'recoil';

function Spendingall() {
  const [selectedMonth] = useRecoilState(monthAtom);
  const [spendingA, setSpendingAll] = useRecoilState(spendingAll);
  const [, setIncomeAll] = useRecoilState(incomeAll);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:3001/user/alltransac", {
          method: "POST",
          body: JSON.stringify({ username: "param" }),
          headers: { "Content-Type": 'application/json' }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }

        const data = await response.json();
        setSpendingAll(data.expense);
        setIncomeAll(data.income);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, [selectedMonth, setSpendingAll, setIncomeAll]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='d-flex flex-row justify-content-center'>
      <div>
        <FaArrowAltCircleUp size={35} className='mt-4' style={{ color: "red-200" }} />
      </div>
      <div className='flex-column'>
        <div className='text-orange-300 mx-2'>
          <h5 className='fs-4 text-info'>Spending</h5>
        </div>
        <Container className='d-flex justify-content-center'>
          <h2 className='text-white'>{Math.abs(spendingA)}</h2>
        </Container>
      </div>
    </div>
  );
}

export default Spendingall;