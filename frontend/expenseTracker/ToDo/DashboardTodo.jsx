import React, { useState, useCallback, useEffect } from 'react';
import { Container } from 'react-bootstrap';

function DashboardTodo() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonth = months[new Date().getMonth()];

  const [data, setData] = useState({ monthlyTodos: [] });
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3001/user/todos", {
        method: "POST",
        body: JSON.stringify({
          username: "param",
          month: currentMonth
        }),
        headers: { "Content-Type": 'application/json' }
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.monthlyTodos && responseData.monthlyTodos.length > 0) {
          setData(responseData);
        } else {
          setError("No records found");
        }
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error("Fetch error: ", error);
      setError("Failed to fetch data");
    }
  }, [currentMonth]);

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, [fetchData]);

  const isDeleteButtonVisible = (deleteTime) => {
    return currentTime < new Date(deleteTime);
  };

  const handleSubmit = async (todoId) => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }
  
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('id', todoId);
  
    try {
      const response = await fetch("http://localhost:3001/user/addimage", {
        method: "PUT",
        body: formData,
      });
  
      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        // Optionally, you can refetch the data or update the state
        fetchData();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload image');
      }
    } catch (error) {
      console.error("Upload error: ", error);
      alert(error.message);
    }
  };

  const isSubmitButtonVisible = (time, date) => {
    if (!time || !date) {
      return false;
    }

    const [year, month, day] = date.split('-');
    const [hours, minutes] = time.split(':');
    const todoDateTime = new Date(year, month - 1, day, hours, minutes);
    
    return currentTime < todoDateTime;
  };

  return (
    <div>
      <div className='d-flex flex-column justify-content-center border col-10'>
        <div className='d-flex flex-row justify-content-center border'>
          <div className='border col-5 m-2 d-flex flex-row justify-content-center fs-3 fw-bold'>
            <div>Daily Breakdown</div>
          </div>
        </div>
        <Container className='d-flex flex-row justify-content-center border' style={{height: "200px"}}>
          <Container className='border col-5 m-2 d-flex flex-row justify-content-center fs-3 fw-bold h-75' style={{height:"80vh"}}>
            <div>daily completion chart</div>
          </Container>
        </Container>
        <Container className='d-flex flex-row justify-content-center border' style={{height: "300px"}}>
          <Container className='border col-5 m-2 d-flex flex-column justify-content-start fs-3 fw-bold h-100' style={{height:"80vh", overflowY: "auto"}}>
            <div>Todos</div>
            {error ? (
              <div>{error}</div>
            ) : (
              <ul>
                {data.monthlyTodos.map((todo) => (
                  <li key={todo._id}>
                    {todo.todo} - {todo.date} {todo.time}
                    <div className='d-flex flex-row '>
                      {isSubmitButtonVisible(todo.time, todo.date) && (
                        <div>
    <input 
      type="file" 
      onChange={(e) => setSelectedFile(e.target.files[0])} 
      accept="image/*"
    />
    <button onClick={() => handleSubmit(todo._id)}>submit</button>
  </div>
                      )}
                      {todo.deletetime && (
                        <>
                          {new Date(todo.deletetime).toLocaleString()}
                          {isDeleteButtonVisible(todo.deletetime) && (
                            <button onClick={async()=>{
                              console.log(todo._id);

                              try{

                                const response = await fetch("http://localhost:3001/user/deletetodo", {
        method: "DELETE",
        headers: {
      'Content-Type': 'application/json',
    },
        body: JSON.stringify(
        {id:todo._id,})
      });
      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        // Optionally, you can refetch the data or update the state
        fetchData();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload image');
      }
    } catch (error) {
      console.error("Upload error: ", error);
      alert(error.message);
    }
                            

                            }}>delete</button>
                          )}
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </Container>
      </div>
      <div>This is DashBoard Todo</div>
    </div>
  );
}

export default DashboardTodo;