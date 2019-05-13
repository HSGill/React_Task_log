import React from 'react';
import ToDoComponent from './to_do.js';
import News from './news.js';
import Weather from './weather.js';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container">
     <ToDoComponent  />
     <News />
     <Weather />
     </div>
     
    </div>
  );
}

export default App;
