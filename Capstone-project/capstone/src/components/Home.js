import React from 'react';
import '../styles/Home.css';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/AuthContext';

export default function Home() {
	const { user, logOut } = useUserAuth;

	const handleLogOut = async () => {
		try {
			await logOut();
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<>
			<div className='homepage'>Homepage</div>
		</>
	);
}
