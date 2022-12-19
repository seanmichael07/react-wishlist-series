import React from 'react';
import './App.css';
import AppBar from './app/features/appbar/appBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersistLogin from './app/features/sessions/PersistLogin';
import PrivateRoute from './app/features/routes/PrivateRoute';
import Dashboard from './app/features/dashboard/Dashboard';
import Logout from './app/features/sessions/Logout';
import UpdateProfile from './app/features/sessions/UpdateProfile';
import Signup from './app/features/sessions/Signup';
import Login from './app/features/sessions/Login';
import PublicRoute from './app/features/routes/PublicRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <AppBar />
        </header>
        <main>
          <Routes>
            <Route element={<PersistLogin />} >
              <Route path="/" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
                }
              />
              <Route path="/logout" element={
                <PrivateRoute>
                  <Logout />
                </PrivateRoute>
                }
              />
              <Route path="/update-profile" element={
                <PrivateRoute>
                  <UpdateProfile />
                </PrivateRoute>
                }
              />
              <Route path="/login" element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
                }
              />
              <Route path="/signup" element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
                }
              />
            </Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
