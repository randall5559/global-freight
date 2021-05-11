import React from 'react';
import { Box } from '@material-ui/core';
import './App.css';
import FilterView from './components/FilterView';
import DataView from './components/DataView';

function App() {
  return (
    <Box display="flex" flexDirection="column" height="100%" overflow="hidden">
      <h2>Global Freight</h2>
      <FilterView />
      <DataView />
    </Box>
  );
}

export default App;
