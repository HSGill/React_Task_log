import React, {Component} from 'react';
import ToDoComponent from './to_do.js';
import News from './news.js';
import Weather from './weather.js';
import './App.css';

class App extends Component {
  render(){
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
}
export default App;
