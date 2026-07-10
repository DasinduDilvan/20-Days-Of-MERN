import React from 'react';
import useState from 'react';


import Navbar from './Components/Navbar/Navbar.jsx';
import { BodyContent, CardSet } from './Components/BodyContent/BodyContent.jsx';
import './index.css';

function App() {

  function incrementFunc() {
    setCount(count + 1);
  }

  function decrimentFunc() {
    setCount(count - 1);
  }

  const [count, setCount] = React.useState(0);

  return (
    <>
      <Navbar />
      <div className="counter">
        <h3 className='Header'>Counter: {count}</h3>
        <button className='but' onClick={decrimentFunc}>-</button>
        <button className='but' onClick={incrementFunc}>+</button>
      </div>
    
      <BodyContent>
        <CardSet>
          <h2>Card 1</h2>
          <p>This is the content of Card 1.</p>
        </CardSet>
        <CardSet>
          <h2>Card 2</h2>
          <p>This is the content of Card 2.</p>
        </CardSet>
        <CardSet>
          <h2>Card 3</h2>
          <p>This is the content of Card 3.</p>
        </CardSet>
        <CardSet>
          <h2>Card 4</h2>
          <p>This is the content of Card 4.</p>
        </CardSet>
        <CardSet>
          <h2>Card 5</h2>
          <p>This is the content of Card 5.</p>
        </CardSet>
        <CardSet>
          <h2>Card 6</h2>
          <p>This is the content of Card 6.</p>
        </CardSet>
      </BodyContent>
    </>
  ) 
}

export default App
