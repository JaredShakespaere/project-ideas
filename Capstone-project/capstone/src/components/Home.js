import React from 'react';
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
			<div className='p-4 box mt-3 text-center'>
				Hello! <br></br>Welcome to the Homepage <br /> {user && user.email}
			</div>
			<div className='d-grid gap-2'>
				<Button variant='primary' onClick={handleLogOut}>
					Log out
				</Button>
			</div>
		</>
	);
}
