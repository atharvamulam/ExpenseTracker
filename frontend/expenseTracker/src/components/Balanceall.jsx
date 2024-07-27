
import React, { useEffect , useState } from 'react';
import { Card } from 'react-bootstrap';
import { useRecoilState, useRecoilValue } from 'recoil';
import {spendingAll , balanceAll, incomeAll} from "./allCards";

function Balanceall() {
    const [bal  , useBal  ] = useRecoilState(balanceAll);
    const [sa , useSa]= useRecoilState(spendingAll);
    const [ia , useIa] = useRecoilState(incomeAll);
    let color  = "";
    useEffect(()=>{
  
    useBal(ia +sa);
  
   } ,[sa , ia])
  
     return (
      <div className="float-left mx-2 pt-2  d-flex flex-row">
      <div className='col-1'></div>
  
        <Card className={`rounded-2 col-7 text-center p-4 text-${bal >= 0  ? "success" : "danger"} fs-2`}  bg={"warning"}>Balance : {bal} </Card>
      </div>
    );
}

export default Balanceall
