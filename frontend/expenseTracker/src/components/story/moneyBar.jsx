import React, { useState, useEffect, useRef } from 'react';
import './moneyBar.css'; 
import { stateAtom } from './atom';
import { useRecoilState } from 'recoil';
import { data } from './atom';

export default function MoneyBar() {
    const [val, setVal] = useRecoilState(stateAtom);
    const [value, setValue] = useState(0);
    const toast = useRef(null);
    const interval = useRef(null);

    useEffect(() => {
        let _val = value;
        
        interval.current = setInterval(() => {
            // _val += data[val].money;

            // if (_val >= 100) {
            //     _val = 100;
            //     if (toast.current) {
            //         toast.current.style.display = 'block'; // Show the toast
            //         setTimeout(() => {
            //             if (toast.current) {
            //                 toast.current.style.display = 'none'; // Hide the toast after 2 seconds
            //             }
            //         }, 2000);
            //     }
            //     clearInterval(interval.current); // Stop the interval
            // }

            setValue(_val);
        }, 2000);

        return () => {
            if (interval.current) {
                clearInterval(interval.current); // Cleanup on unmount
                interval.current = null;
            }
        };
    }, [val]);

    useEffect(() => {
        if (value === 100) {
            if (toast.current) {
                toast.current.style.display = 'block';
                setTimeout(() => {
                    if (toast.current) {
                        toast.current.style.display = 'none';
                    }
                }, 2000);
            }
        }
    }, [value]);

    return (
        <div className="money-bar-container">
            <div className="money-bar" style={{ width: `${data[val].money}%`, backgroundColor: value >= 100 ? '#28a745' : '#007bff' }}>
                <div>Money</div>
            </div>
            <div ref={toast} className="toast">
                Process Completed
            </div>
        </div>
    );
}
