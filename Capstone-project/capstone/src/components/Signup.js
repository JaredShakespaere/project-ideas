import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button, Alert } from 'react-bootstrap';
import { useUserAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelope,
	faKey,
	faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

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
				<h2 className='mb-3' id='sign-up-title'>
					Sign Up
				</h2>
				{error && <Alert variant='danger'> {error} </Alert>}
				<Form onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<FontAwesomeIcon
							icon={faEnvelope}
							className='login-icon'
							id='email-icon'
						/>
						<Form.Control
							type='email'
							placeholder='Email Address'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<FontAwesomeIcon
							icon={faKey}
							className='login-icon'
							id='password-icon'
						/>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</Form.Group>

					<div className='d-grid gap-2' id='sign-up-btn'>
						<Button variant='primary' type='Submit'>
							<FontAwesomeIcon
								icon={faArrowRight}
								className='button-icon'
								id='arrow-icon'
							/>
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
