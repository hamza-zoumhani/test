import React from 'react';
import './App.css';
import Deliveries from './componentss/Deliveries'
import AppBar from '@material-ui/core/AppBar';

const styles = {
  marginBottom: 10
}

function App() {
  return (
    <div className="App">
      <AppBar position="static" style={styles}>
				<h1>Deliveries</h1>
      </AppBar>
      <button className="btn btn-small btn-primary"></button>
      <Deliveries />
    </div>
  );
}

export default App;
