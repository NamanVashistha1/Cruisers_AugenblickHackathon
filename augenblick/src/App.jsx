import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import History from './pages/History/history.jsx';

// import Classify from './pages/classify.jsx';

import Upload from './pages/Upload/upload.jsx';
// import ContactPage from './pages/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/upload" element={<Upload />}/>
        <Route path="/dash" element={<Dashboard />}/>
        <Route path="/history" element={<History />}/>
        {/* <Route path="/classify" element={<Classify />}/> */}
        {/* <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} /> */}
      </Routes>
    </Router>
  );
}

export default App;
