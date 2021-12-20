import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/AuthContext';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
	return (
		<>
			<Container>
				<Row>
					<Col>
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
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
