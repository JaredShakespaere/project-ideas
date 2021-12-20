import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button, Alert } from 'react-bootstrap';
import { useUserAuth } from '../context/AuthContext';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { signUp } = useUserAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await signUp(email, password);
			navigate('/');
		} catch (err) {
			setError(err.message);
		}
	};
	return (
		<>
			<div className='p-4 box'>
				<h2 className='mb-3'>Sign Up</h2>
				{error && <Alert variant='danger'> {error} </Alert>}
				<Form onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Control
							type='email'
							placeholder='Email Address'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='form BasicPassword'>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</Form.Group>

					<div className='d-grid gap-2'>
						<Button disable={handleSubmit} variant='primary' type='Submit'>
							Sign Up!
						</Button>
					</div>
				</Form>
			</div>
			<div className='p-4 box mt-3 text-center'>
				Don't have an account? <Link to='/'>Log In</Link>
			</div>
		</>
	);
};

export default Signup;