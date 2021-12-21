import React, { useState } from 'react';
import '../styles/Dropdown.css';
import { teamsDropdown } from './NavItems';
import { Link } from 'react-router-dom';

export default function Dropdown() {
    const [dropdown, setDropdown] = useState(false);


	return (
		<ul
			className={dropdown ? 'teams-dropdown clicked' : 'teams-dropdown'}
			onClick={() => setDropdown(!dropdown)}>
			{teamsDropdown.map((item) => {
				return (
					<li key={item.id}>
						<Link
							className={item.className}
							to={item.path}
							onClick={() => setDropdown(false)}>
							{item.title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
