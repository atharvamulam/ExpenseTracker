import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaArrowAltCircleUp } from "react-icons/fa";
import { spendingAtom, monthAtom } from './atom';
import { useRecoilState } from 'recoil';

function Spending() {
    const [spending, setSpending] = useRecoilState(spendingAtom);
    const [month, setMonth] = useRecoilState(monthAtom);

    function Amount() {
        return (
            <Container className='d-flex justify-content-center'>
                <h2 className='text-white'>{spending * -1}</h2>
            </Container>
        );
    }

    useEffect(() => {
        Amount();
    }, [month]);

    return (
        <div className='d-flex flex-row justify-content-center'>
            <div className=''>
                <FaArrowAltCircleUp size={50} className='mt-4' style={{ color: "red-200" }} />
            </div>
            <div className='flex-column '>
                <div className='text-orange-300 mx-2'>
                    <h5 className='fs-3 mt-2 text-info'>Spending</h5>    
                </div>
                <Amount />
            </div>
        </div>
    );
}

export default Spending;
