import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/AuthContext';
import Home from './components/Home';
// import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar';
import MyTeams from './components/MyTeams';
import Profile from './components/Profile';

function App() {
	return (
		<>
			<NavBar />
			<UserAuthContextProvider>
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/teams' element={<MyTeams />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/' element={<Login />} />
				</Routes>
			</UserAuthContextProvider>
		</>
	);
}

export default App;
