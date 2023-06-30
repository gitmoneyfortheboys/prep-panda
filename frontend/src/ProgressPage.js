import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';


const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; // 3 columns for larger screens
  grid-gap: 1rem; // gap between the cards
  margin: 1rem;

  // Make it responsive for smaller screens, stacking cards vertically
  @media (max-width: 768px) {
    grid-template-columns: 1fr; // single column layout for smaller screens
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 270px;
  margin: 1rem;
  padding: 20px;
  width: 270px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1); // Shadow effect
  transition: 0.3s; // Transition effect for hover
  
  // On hover, the card will slightly grow and shadow will be more pronounced
  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
  }
`;


const Title = styled.h2`
  color: #3f51b5;
  margin-bottom: 20px; // Add some margin at the bottom
`;

const Value = styled.h2`
  color: #3f51b5;
  font-size: 24px;
  font-weight: bold;
`;


function ProgressPage() {
  const data = [{name: 'Math', value: 300},{name: 'Reading', value: 200}, {name: 'Thinking', value: 100}];

  return (
    <div>
      <h1>Here's your progress so far:</h1>
      <CardContainer>
      <Card>
        <Title>Number of Questions Completed</Title>
        <Value>120</Value> 
      </Card>

      <Card>
        <Title>Percentage Correct</Title>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={[{name: 'Jan', percentage: 70}, {name: 'Feb', percentage: 80}, {name: 'Mar', percentage: 90}, {name: 'Apr', percentage: 75}, {name: 'May', percentage: 85}, {name: 'Jun', percentage: 95}]}>
            <Line type="monotone" dataKey="percentage" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card>
        <Title>Area to Focus on</Title>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8">
              {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]}/>)
              }
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Card>

      <Card>
        <Title>Best Subject</Title>
        <Value>Math</Value>
      </Card>

      <Card>
        <Title>Avg Time/Question</Title>
        <Value>30 sec</Value>
      </Card>

      <Card>
        <Title>Total Points</Title>
        <Value>1000</Value>
      </Card>
      </CardContainer>
    </div>
  );
}

export default ProgressPage;
