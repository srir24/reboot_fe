import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddTrustee from './components/AddTrustee';
import AddGoal from './components/AddGoal';
import ViewGoals from './components/ViewGoals';
import TrackGoals from './components/TrackGoals';
import './App.css';

const staticMasters = [];

const staticTrustees = [];

const staticGoals = [];

const App = () => {
  const [trustees, setTrustees] = useState(staticTrustees);
  const [goals, setGoals] = useState(staticGoals);

  return (
    <Router>
      <header>
        <h1>Financial - App</h1>
      </header>
      
      <div className="App">
        <h1>Trusted Access - Customer Engagement App</h1>
        <nav>
          <Link to="/add-trustee">Add Trustee</Link> | 
          <Link to="/add-goal">Add Goal</Link> | 
          <Link to="/view-goals">View Goals</Link> |
          <Link to="/track-goals">Track Goals</Link>
        </nav>
        <Routes>
          <Route
            path="/add-trustee"
            element={<AddTrustee trustees={trustees} setTrustees={setTrustees} />}
          />
          <Route
            path="/add-goal"
            element={<AddGoal masters={staticMasters} trustees={trustees} goals={goals} setGoals={setGoals} />}
          />
          <Route
            path="/view-goals"
            element={<ViewGoals goals={goals} />}
          />
          <Route
            path="/track-goals"
            element={<TrackGoals goals={goals} />}
          />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
