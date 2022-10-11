import React, { Component } from 'react';
import ToDoCard from './components/todoCard';
import Button from './components/button';


class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className="row g-2 py-2">
        {/* Todo cards */}
        <ToDoCard />
        {/* Add new task button */}
        <Button 
          isCollapseButton={ false }
          buttonVariant="outline-primary"
          otherClasses="rounded-circle position-fixed"
        />
      </div>
    );
  }
}
 
export default App;