// @vendors 
import React, { Fragment, lazy, Suspense } from 'react';
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import { Button } from 'reactstrap';

// @templates
import Home from './templates/home';

// @styles 
import './App.scss';


function App() {
  return (
    <Home />
  );
}

export default App;
