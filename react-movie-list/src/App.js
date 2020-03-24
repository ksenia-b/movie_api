import React, {useEffect} from 'react';
import './App.css';

function App() {
    userEffect(() => {
        fetch('/movies')
    }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
