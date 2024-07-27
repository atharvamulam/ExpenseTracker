import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Appbar from './components/Appbar';
import Dashboard from './components/Dashboard';
import Add from './components/Add';
import Visualization from './components/Visualization';
import LoginDetails from './components/LoginDetails';
import SeeAll from './components/SeeAll';
import DashboardTodo from '../ToDo/DashboardTodo';
import AddTodo from '../ToDo/AddTodo';
import CreateTodo from '../ToDo/CreateTodo';
import FinalTodo from '../ToDo/FinalTodo';
import Admin from '../ToDo/Admin';
import Story from './components/story/storyApp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <RecoilRoot>
      <LoginDetails username="param" />
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3 col-lg-2 bg-light sidebar">
              <Appbar />
            </div>

            {/* Main Content */}
            <div className="col-md-9 col-lg-10 ml-sm-auto px-4">
              <div className="expense-tracker">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/add" element={<Add />} />
                  <Route path="/visualize" element={<Visualization />} />
                  <Route path="/seeall" element={<SeeAll />} />
                  <Route path="/story" element={<Story/>} />
                </Routes>
              </div>
              <div className="todo-list">
                <Routes>
                  <Route path="/dashboard" element={<DashboardTodo />} />
                  <Route path="/addtodo" element={<AddTodo />} />
                  <Route path="/createtodo" element={<CreateTodo />} />
                  <Route path="/finaltodo" element={<FinalTodo />} />
                  <Route path="/alltodos" element={<Admin />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
