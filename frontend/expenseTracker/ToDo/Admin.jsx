import React, { useState, useEffect } from 'react';

function Admin() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3001/user/alltodos", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body :JSON.stringify({
            username :"param" 
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data)
      setTodos(data.allTodos || []);
      console.log(todos);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>All Todos</h2>
      {todos.length === 0 ? (
        <p>No todos found.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li >{todo.todo} {todo.date} {todo.approved} <button onClick={()=>{}}> approve</button></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Admin;