import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";
import { spendingAll, incomeAll } from './allCards';
import { monthAtom } from './dashboard/atom';
import Container from 'react-bootstrap/Container';
import { useRecoilState } from 'recoil';

function Incomeall() {
    const [selectedMonth] = useRecoilState(monthAtom);
    const [spendingA, setSpendingAll] = useRecoilState(spendingAll);
    const [incomeA, setIncomeAll] = useRecoilState(incomeAll);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  return (
    <div>
     <div className='d-flex flex-row justify-content-center'>
      <div>
        <FaArrowAltCircleUp size={35} className='mt-4' style={{ color: "red-200" }} />
      </div>
      <div className='flex-column'>
        <div className='text-orange-300 mx-2'>
          <h5 className='fs-4 text-info'>Income</h5>
        </div>
        <Container className='d-flex justify-content-center'>
          <h2 className='text-white'>{Math.abs(incomeA)}</h2>
        </Container>
      </div>
    </div>
      
    </div>
  )
}

export default Incomeall
