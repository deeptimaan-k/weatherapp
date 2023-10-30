import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './NavBar';
import Weather from './Weather';
import Water from './Water';
import FeedBack from './Feedback';
import ECommerce from './ECommerce';

function App() {
  return (
    <Router>
      <div>
        <ResponsiveAppBar />
        <Routes>
          <Route path="" element={<Weather />} /> {/* Set the Weather page as default */}
          <Route path="/weather" element={<Weather />} />
          <Route path="/water" element={<Water />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/ecommerce" element={<ECommerce />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
