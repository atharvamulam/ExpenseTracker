import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

function Appbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar flex-column">
      <Nav.Item className={isActive('/')}>
        <Nav.Link onClick={() => navigate('/')}>Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item className={isActive('/add')}>
        <Nav.Link onClick={() => navigate('/add')}>Add</Nav.Link>
      </Nav.Item>
      <Nav.Item className={isActive('/visualize')}>
        <Nav.Link onClick={() => navigate('/visualize')}>Visualization</Nav.Link>
      </Nav.Item>
      <Nav.Item className={isActive('/seeall')}>
        <Nav.Link onClick={() => navigate('/seeall')}>All Transactions</Nav.Link>
      </Nav.Item>
      <Nav.Item className={isActive('/story')}>
        <Nav.Link onClick={() => navigate('/story')}>Story</Nav.Link>
      </Nav.Item>
      <NavDropdown title="Todo" id="todo-nav-dropdown" className={isActive('/dashboard')}>
        <NavDropdown.Item onClick={() => navigate('/dashboard')}>Dashboard Todo</NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate('/addtodo')}>Add Todo</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default Appbar;
