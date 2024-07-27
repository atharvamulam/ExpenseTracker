import React from 'react';
import Container from 'react-bootstrap/Container';
import Input from './dashboard/Input';
import Spending from './dashboard/Spending';
import Income from './dashboard/Income';
import Balance from './dashboard/Balance';
import FiveCards from './dashboard/FiveCards';
import Cards from './dashboard/Cards';
import RecentTransac from './dashboard/RecentTransac'; // Importing RecentTransac

function Dashboard() {
  return (
    <Container fluid>
      <div className="row mb-2">
        <div className="col-md-4">
          <Input />
        </div>
      </div>

      <div className="row mb-2 justify-content-center">
        <div className="col-md-5">
          <Cards color={"success"} className="bg-green-500">
            <Income />
          </Cards>
        </div>
        <div className="col-md-5">
          <Cards color={"danger"} className="bg-red-500">
            <Spending />
          </Cards>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-12">
          <Balance />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-12">
          <FiveCards />
        </div>
      </div>

      <div className="row mb-3 justify-content-center">
        <div className="col-md-10">
          <RecentTransac /> {/* Adding RecentTransac here */}
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;
