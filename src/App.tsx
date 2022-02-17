import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/index";
import { APPLICATION_PATH } from './routes';

const App = () => {
  return (
    <>
          <Routes>
            <Route path={APPLICATION_PATH} element={ <HomePage />} />
          </Routes>
    </>
  );
}

export default App;
