import React from 'react';
import { Container } from 'react-bootstrap';
import { FaArrowAltCircleDown } from "react-icons/fa";
import { incomeAtom } from './atom';
import { useRecoilState } from 'recoil';

function Income() {
    const [income, setIncome] = useRecoilState(incomeAtom);

    return (
        <div className='d-flex flex-row justify-content-center'>
            <div>
                <FaArrowAltCircleDown size={50} className='mt-4' style={{ color: "red-200" }} />
            </div>
            <div className='flex-column'>
                <div className='text-orange-300 mx-3'>
                    <h5 className='fs-3 mt-2 text-info'>Income</h5>
                </div>
                <Container className='d-flex justify-content-center'>
                    <h2 className='text-white'>{income}</h2>
                </Container>
            </div>
        </div>
    );
}

export default Income;
