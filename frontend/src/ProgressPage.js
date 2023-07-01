import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Button } from './quiz'; // Import Button from quiz.js
import { PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';


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

const CenteredButton = styled(Button)`
  margin-top: 30px; // add some top margin
  text-decoration: none; // remove underline
  font-size: 2rem; // double the original font size
  padding: 20px; // double the padding
  width: 100%; // set width to 100%
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background: ${props => props.background || "#fff"}; // Add this line
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin: 1rem;
  padding: 20px;
  width: 300px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1); // Shadow effect
  transition: 0.3s; // Transition effect for hover
  
  // On hover, the card will slightly grow and shadow will be more pronounced
  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
  }
`;


const Title = styled.h2`
  color: ${props => props.textColor || "#3f51b5"};
  margin-bottom: 20px;
`;

const Value = styled.h2`
  color: ${props => props.textColor || "#3f51b5"};
  font-size: 24px;
  font-weight: bold;
`;



function ProgressPage() {
  const data = [{name: 'Math', value: 30},{name: 'Reading', value: 10}, {name: 'Thinking', value: 20}];

  // Array of colors for the cards
  const cardColors = ["#9FD725", "#EFEFEF", "#3454D1", "#070707", "#3874ffba", "#E09F3E"];

  const areaOfFocus = data.reduce((prev, current) => prev.value > current.value ? prev : current).name;
  
  return (
    <div>
      <h1>Here's your progress so far:</h1>
      <CardContainer>
      <Card background={cardColors[0]} textColor="#000000">
        <Title textColor="#000000">Questions Completed</Title>
        <Value textColor="#000000">120</Value> 
      </Card>

      <Card background={cardColors[4]} textColor="#FFFFFF">
        <Title textColor="#FFFFFF">Percentage Correct</Title>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={[{name: 'Jan', percentage: 70}, {name: 'Feb', percentage: 80}, {name: 'Mar', percentage: 90}, {name: 'Apr', percentage: 75}, {name: 'Jun', percentage: 95}]}>
            <Line type="monotone" dataKey="percentage" stroke="#FFFFFF" />
            <CartesianGrid stroke="#FFFFFF" />
            <XAxis dataKey="name" stroke="#FFFFFF" /> {/* Added stroke prop here */}
            <YAxis stroke="#FFFFFF" /> {/* Added stroke prop here */}
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card>
        <Title textColor="#000000">Split 1 hour like this</Title>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75} fill="#8884d8">
              {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]}/>)
              }
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Card>

      <Card background={cardColors[1]} textColor = "#000000">
        <Title textColor="#000000">Best Subject</Title>
        <Value textColor="#000000">Math</Value>
      </Card>

      <Card background={cardColors[2]} textColor="#FFFFFF">
        <Title textColor="#FFFFFF">Avg. Time per Question</Title>
        <Value textColor="#FFFFFF">30 sec</Value>
      </Card>

      <Card background={cardColors[3]} textColor="#FFFFFF">
        <Title textColor="#FFFFFF">Total Points</Title>
        <Value textColor="#FFFFFF">1000</Value>
      </Card>
      </CardContainer>

      <ButtonContainer>
        <Link to="/quiz">
          <CenteredButton>
            Progress my {areaOfFocus}
          </CenteredButton>
        </Link>
      </ButtonContainer>
    </div>
  );
}

export default ProgressPage;
