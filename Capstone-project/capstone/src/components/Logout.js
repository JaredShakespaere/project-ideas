import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Logout.css'

export default function Logout() {
	return (
		<Link to='./'>
			<button className='btn'>Logout</button>
		</Link>
	);
}
