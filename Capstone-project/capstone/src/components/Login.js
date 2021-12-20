import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/AuthContext';
import GoogleButton from 'react-google-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSpinner,
	faEnvelope,
	faKey,
	faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

const Login = () => {
	const [error, setError] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const { logIn, GoogleSignIn } = useUserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await logIn(email, password);
			navigate('/home');
		} catch (err) {
			setError(err.message);
		}
	};

	const handleGoogleSignIn = async (e) => {
		e.preventDefault();

		try {
			await GoogleSignIn();
			navigate('/home');
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<>
			<div className='p-4 box login-component'>
				{error && <Alert variant='danger'>{error}</Alert>}
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
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='form BasicPassword'>
						<FontAwesomeIcon
							icon={faKey}
							className='login-icon'
							id='password-icon'
						/>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>

					<div className='d-grid gap-2'>
						<Button variant='primary' type='Submit'>
							<FontAwesomeIcon
								icon={faArrowRight}
								className='button-icon'
								id='arrow-icon'
							/>
						</Button>
					</div>
				</Form>
				<div className='p-4 box mt-3 text-center'>
					Don't have an account? <Link to='/Signup'>Sign Up</Link>
				</div>
			</div>
		</>
	);
};

export default Login;
