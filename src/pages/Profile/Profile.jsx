import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import './Profile.css'

const Profile = () => {
	const [name, setName] = useState('Zhaksylyk Ashim')
	const [newName, setNewName] = useState('')
	const [email, setEmail] = useState('duramash.02@gmail.com')
	const [newEmail, setNewEmail] = useState('')
	const [password, setPassword] = useState('qwerty123')
	const [newPassword, setNewPassword] = useState('')
	const [birthDate, setBirthDate] = useState('13.05.2002')
	const [newBirthDate, setNewBirthDate] = useState('')
	return (
		<>
			<Navbar />
			<div>
				<div className={'container'}>
					<h1>{name}</h1>
					<input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}></input>
					<button onClick={() => setName(newName)}>Обновить</button>
				</div>
				<div className={'container'}>
					<h1>Birthday: {birthDate}</h1>
					<input type="text" value={newBirthDate} onChange={(e) => setNewBirthDate(e.target.value)}></input>
					<button onClick={() => setBirthDate(newBirthDate)}>Обновить</button>
				</div>
				<div className={'container'}>
					<h2>Email: {email}</h2>
					<input type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}></input>
					<button onClick={() => setEmail(newEmail)}>Обновить</button>
				</div>
				<div className={'container'}>
					<h2>Password: {password}</h2>
					<input type="text" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
					<button onClick={() => setPassword(newPassword)}>Обновить</button>
				</div>
			</div>
		</>
	);
};

export default Profile;