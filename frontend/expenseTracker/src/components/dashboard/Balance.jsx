import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { incomeAtom, spendingAtom } from './atom';

function Balance() {
  const [bal, setBal] = useState(0);
  const [sa, setSa] = useRecoilState(spendingAtom);
  const [ia, setIa] = useRecoilState(incomeAtom);

  useEffect(() => {
    setBal(ia + sa);
  }, [sa, ia]);

  const balanceColor = bal >= 0 ? '#4CAF50' : '#F44336'; 
  const cardStyle = {
    borderRadius: '10px',
    backgroundColor: '#FFF',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    color: balanceColor,
    width: '100%',
    margin: '10px',
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <Card style={cardStyle}>
        Balance: {bal}
      </Card>
    </div>
  );
}

export default Balance;
