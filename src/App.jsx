import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import AuthRoute from './routes/AuthRoute';
import Login from './components/Auth/Login/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/Auth/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import BookShelf from './pages/BookShelf';
import Threads from './pages/Threads';
import ThreadForm from './components/Threads/ThreadForm/ThreadForm';
import ThreadsNew from './pages/ThreadNew';
import BookLevels from './pages/BookLevels';
import QuizzPage from './pages/QuizzPage';
import LearningPage from './pages/LearningPage';
import ThreadPage from './pages/ThreadPage';
import Profile from './pages/Profile';
import VideoConferencePage from './pages/VideoCall';
import QuizzGrammar from './pages/QuizzGrammarPage';
import Home from './pages/Home';
import GamePage from './components/GamePage/GamePage';
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={
            <Dashboard />
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<AuthRoute>
            <Login />
          </AuthRoute>} />
        <Route path="/signup" element={<AuthRoute>
            <SignUp />
          </AuthRoute>} />
        <Route path="/bookshelf" element={
          <ProtectedRoute>
            <BookShelf />
          </ProtectedRoute>
        } />
        <Route path="/threads" element={
          <ProtectedRoute>
            <Threads />
          </ProtectedRoute>
        } />
        <Route path="/threads/new" element={
          <ProtectedRoute>
            <ThreadsNew />
          </ProtectedRoute>
        } />

<Route path="/book/:id/quizz" element={
          <ProtectedRoute>
            <QuizzPage />
          </ProtectedRoute>
        } />

  <Route path="/book/:id/learn" element={
          <ProtectedRoute>
            <LearningPage />
          </ProtectedRoute>
        } />

<Route path="/games/asan-usen" element={
          <ProtectedRoute>
            <GamePage />
          </ProtectedRoute>
        } />

      <Route path="/books/:id" element={
          <ProtectedRoute>
            <BookLevels />
          </ProtectedRoute>
        } />

    <Route path="/threads/:id" element={
          <ProtectedRoute>
            <ThreadPage />
          </ProtectedRoute>
        } />

<Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

<Route path="/threads/:id/videoSession" element={
          <ProtectedRoute>
            <VideoConferencePage />
          </ProtectedRoute>
        } />

<Route path="/grammar" element={
          <ProtectedRoute>
            <QuizzGrammar />
          </ProtectedRoute>
        } />


        
        <Route path="*" element={<NotFound />} />
    </Routes>
    <ToastContainer position="top-right" autoClose={1500} />
    </Router>
  );
}

export default App;
