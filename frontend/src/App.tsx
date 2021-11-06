import Assignments from './components/assignment/assignments';
import Sidebar from './components/navbar/Sidebar';

import { useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import axios, {AxiosResponse} from 'axios';

import './styles/main.css';

const App = () => {

  return(
    <div className="App">
      <Sidebar />
      <div className="content">
      <Routes>
        <Route path='/assignments' element={<Assignments />} />
      </Routes>
      </div>
    </div>


  );
}

export default App;