import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const [progress, setprogress] = useState(0)
  const pagesize = 6;
  const apikey = process.env.REACT_APP_NEWS_API

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color='#f11946' progress={progress} />
        <Routes>
          <Route exact path="/" element={<News setprogress={setprogress} apikey={apikey} key="general" pagesize={pagesize} country="in" category="general" />}></Route>
          <Route exact path="/business" element={<News setprogress={setprogress} apikey={apikey} key="business" pagesize={pagesize} country="in" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setprogress={setprogress} apikey={apikey} key="entertainment" pagesize={pagesize} country="in" category="entertainment" />}></Route>
          <Route exact path="/general" element={<News setprogress={setprogress} apikey={apikey} key="general" pagesize={pagesize} country="in" category="general" />}></Route>
          <Route exact path="/health" element={<News setprogress={setprogress} apikey={apikey} key="health" pagesize={pagesize} country="in" category="health" />}></Route>
          <Route exact path="/science" element={<News setprogress={setprogress} apikey={apikey} key="science" pagesize={pagesize} country="in" category="science" />}></Route>
          <Route exact path="/sports" element={<News setprogress={setprogress} apikey={apikey} key="sports" pagesize={pagesize} country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<News setprogress={setprogress} apikey={apikey} key="technology" pagesize={pagesize} country="in" category="technology" />}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App;