import React, { useEffect, useState, useCallback } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";

import { monthAtom } from './dashboard/atom';

function Allcards({route,method_type,username}) {
    const [ month,selectedMonth] = useRecoilState(monthAtom);
    const [data, setData] = useState(null);
    // const  = useRecoilValue(monthAtom);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:3001/user/${route}`, {
                method: `${method_type}`,
                body: JSON.stringify({ username:username }),
                headers: { "Content-Type": 'application/json' }
            });

            if (response.ok) {
                const data = await response.json();
                if(data.allExpenses == "null")
                    {
                        return<>
                            No records found
                        </>
                    }
                    setData(data);
            } else {
                console.error("Fetch error: ", response.statusText);
            }
        } catch (error) {
            console.error("Fetch error: ", error);
        }
    }, [data]);

    useEffect(() => {
        fetchData();
    }, [selectedMonth, fetchData]);

    const renderExpenseCard = (r) => (
        <div key={r.id} className='d-flex flex-row justify-center'>
        <div className='p-1'></div>
            <div className='' style={{ height: 1, width: 95 }}></div>
            <div 
                className='border rounded col-7 mx-3'
                style={{
                    backgroundColor: r.amount > 0 ? "green" : "red",
                    height: 100,
                    transition: 'filter 0.3s',
                    ':hover': { filter: 'brightness(1.15)' }
                }}
            >
                <div className='d-flex flex-row justify-content-between p-3'>
                    <div className='d-flex flex-row justify-start align-items-center'>
                        {r.amount > 0 ?
                        (<FaArrowAltCircleDown size={50} className='mx-3' />) :
                        (<FaArrowAltCircleUp size={50} className='mx-3' />)
                        }
                    </div>
                    <div className='d-flex flex-column flex-grow-1'>
                        <div className='fs-4 d-flex flex-row justify-between'>
                            <div className='text-info'>{r.amount}</div>
                            <div className='col-5'></div>
                            <div className='text-white'>{r.category}</div>
                        </div>
                        <div className='fs-4 text-warning'>{r.description}</div>
                    </div>
                    <div className='d-flex flex-column cash time'>
                        <div className='text-info'>{`${r.date}-${r.month}-${r.year}`}</div>
                        <IoMdCash size={40} />
                    </div>
                </div>
            </div>
        </div>
    );

    if (!data) return <div>Loading...</div>;
   
    return (
        <div className='abc d-flex flex-column justify-end'>
            {data.allExpenses.map(renderExpenseCard)}
        </div>
    );
}

export default Allcards
