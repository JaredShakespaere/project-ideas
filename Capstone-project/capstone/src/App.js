import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/AuthContext';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar';

function App() {
	return (
		<>
			<NavBar />

			<UserAuthContextProvider>
				<Routes>
					<Route
						path='/home'
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route path='/signup' element={<Signup />} />
					<Route path='/' element={<Login />} />
				</Routes>
			</UserAuthContextProvider>
		</>
	);
}

export default App;
