import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
	return (
		<div className={"navbar"}>
			<img className={"logo"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1245px-Logo_of_Twitter.svg.png" alt="logo" />
			<Link to={'/'}>
				<button>Homepage</button>
			</Link>
			<Link to={'/profile'}>
				<button>Profile</button>
			</Link>
		</div>
	);
};

export default Navbar;