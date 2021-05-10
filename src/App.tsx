import React from 'react';
import { Box } from '@material-ui/core';
import './App.css';
import FilterView from './components/FilterView';

function App() {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <h2>Global Freight</h2>
      <FilterView />
    </Box>
  );
}

export default App;
