import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const PostDetails = ({ id }) => {
	// let { id } = useParams();

	return (
		<>
			<Navbar />
			post detail page
			<h1>id</h1>
		</>
	);
};

export default PostDetails;