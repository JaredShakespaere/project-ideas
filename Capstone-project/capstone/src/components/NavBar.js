import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MyTeams from './MyTeams';
import Logout from './Logout';
import Profile from './Profile';

export default function NavBar() {
	return (
		<Routes>
			<Route path='/home' element={<Home />} />
			<Route path='/teams' element={<MyTeams />}/>
			<Route path='/profile' element={ <Profile />}/>
			<Route path='/' element={ <Logout /> }/>
		</Routes>
	);
}
