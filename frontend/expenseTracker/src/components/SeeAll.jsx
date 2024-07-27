import React from 'react';
import Container from 'react-bootstrap/Container';
import Input from './dashboard/Input';
import Spending from './dashboard/Spending';
import Income from './dashboard/Income';
import Balance from './dashboard/Balance';
import RecentTransac from './dashboard/RecentTransac';
import FiveCards from './dashboard/FiveCards';
import Cards from './dashboard/Cards';
import { Card } from 'react-bootstrap';
import Allcards from './Allcards';
import Spendingall from './Spendingall';
import Incomeall from './Incomeall';
import Balanceall from './Balanceall';

function SeeAll() {
  return (
    <div>
          <div className='center d-flex flex-row justify-center'>
      <div className='d-flex flex-row justify-end  w-50  '>
      <div className='col-3'></div>
      
      <div>

        <Cards color={"danger"} className="bg-red-500"><Spendingall></Spendingall></Cards>
      </div>
      <div className='col-1'></div>
        <div>
          
        <Cards color={"success"} className="bg-green-500"><Incomeall></Incomeall></Cards>
        </div>
      </div>
      </div>
      <Container className=' float-left mx-4 '>
      <Container className=" p-1 float-left " style={{}}>
     
      <Balanceall />
      <RecentTransac />

    </Container>
      </Container>
      <Allcards className="" method_type={"POST"} route={"seeall"} username={"param"} />
    </div>
  )
}

export default SeeAll
