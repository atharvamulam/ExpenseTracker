import React, { useEffect, useState } from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import { radioAtom } from './atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { monthAtom } from '../dashboard/atom';

function Form() {
  const [count, setCount] = useRecoilState(radioAtom);
  const m = useRecoilValue(monthAtom);
  const date = new Date();
  const d = date.getDate();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = m;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const [category, setCategory] = useState("category");
  const [inputt, setInputt] = useState("");
  const [textA, setTextA] = useState("");

  useEffect(() => { console.log(category) }, [category]);
  useEffect(() => { console.log(inputt) }, [inputt]);
  useEffect(() => { console.log(textA) }, [textA]);

  return (
    <div className="p-4 bg-light rounded my-4 shadow-sm">
      <div className="d-flex justify-content-between mb-3">
        <div className="font-weight-bold">
          Date: {d} {months[month]} {year}
        </div>
        <div className="font-weight-bold">
          Time: {hour}:{minutes < 10 ? '0' : ''}{minutes}
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <Container className="d-flex align-items-center">
          <label className="me-2">Amount</label>
          <input type="number" className="form-control" onChange={(e) => setInputt(e.target.value)} />
        </Container>
        <Container className="d-flex align-items-center">
          <label className="me-2">Category</label>
          <Dropdown onSelect={(eventKey) => setCategory(eventKey)}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">{category}</Dropdown.Toggle>
            <Dropdown.Menu>
              {count > "1" ? (
                <>
                  <Dropdown.Item eventKey="Salary">Salary</Dropdown.Item>
                  <Dropdown.Item eventKey="Others">Others</Dropdown.Item>
                </>
              ) : (
                <>
                  <Dropdown.Item eventKey="Food">Food</Dropdown.Item>
                  <Dropdown.Item eventKey="Shopping">Shopping</Dropdown.Item>
                  <Dropdown.Item eventKey="Travelling">Travelling</Dropdown.Item>
                  <Dropdown.Item eventKey="Personal care">Personal care</Dropdown.Item>
                  <Dropdown.Item eventKey="Medical">Medical</Dropdown.Item>
                  <Dropdown.Item eventKey="Others">Others</Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </div>
      <Container className="mt-3">
        <label htmlFor="comment">Comment:</label>
        <textarea onChange={(e) => setTextA(e.target.value)} className="form-control" rows="5" id="comment"></textarea>
      </Container>
      <Container className="d-flex justify-content-center mt-4">
        <button className="btn btn-success" onClick={async () => {
          const req = count === "1" ? -1 * inputt : inputt;
          const response = await fetch("http://localhost:3001/user/add", {
            method: "POST",
            body: JSON.stringify({
              val: count,
              username: "param",
              month: month,
              date: d,
              year: year,
              category: category,
              amount: req,
              description: textA
            }),
            headers: {
              "Content-Type": 'application/json'
            }
          });
          if (response.ok) {
            alert("Data inserted");
          }
        }}>Submit</button>
      </Container>
    </div>
  );
}

export default Form;
