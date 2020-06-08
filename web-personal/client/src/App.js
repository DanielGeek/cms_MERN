import React from 'react';
import { DatePicker, Card } from 'antd';
import './App.scss';

function App() {

  const test = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="app">
      <h1>Web personal - client</h1>
      <h2>Proyecto</h2>
      <DatePicker onChange={test} />
      
      <Card title="Test..." style={{ width: 300 }}>
      <p>Hola mundo...</p>
      
    </Card>
    </div>
  );
}

export default App;
