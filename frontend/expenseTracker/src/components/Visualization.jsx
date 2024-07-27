import React, { useEffect, useState, useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

function Visualization() {
  const [array, setArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3001/user/visualize", {
          method: "POST",
          headers: {
            "Content-Type": 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setArray(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const data = useMemo(() => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return months.map((month, index) => ({
      name: month,
      Expenses: array[index] ? Math.abs(array[index][0]) : 0,
      Income: array[index] ? array[index][1] : 0
    }));
  }, [array]);

  const maxValue = useMemo(() => {
    return Math.max(...data.flatMap(item => [item.Expenses, item.Income]));
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadarChart outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis domain={[0, maxValue]} />
        <Radar 
          name="Expenses"
          dataKey="Expenses" 
          stroke="#FF0000" 
          fill="#FF0000" 
          fillOpacity={0.3} 
        />
        <Radar 
          name="Income"
          dataKey="Income" 
          stroke="#00FF00" 
          fill="#00FF00" 
          fillOpacity={0.3} 
        />
        <Legend />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default Visualization;