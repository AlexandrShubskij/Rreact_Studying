/** @format */

import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Javascript', body: 'Description' },
		{ id: 2, title: 'Javascript 1', body: 'Description' },
		{ id: 3, title: 'Javascript 2', body: 'Description' },
		{ id: 4, title: 'Javascript 3', body: 'Description' },
		{ id: 5, title: 'Javascript 4', body: 'Description' },
		{ id: 6, title: 'Javascript 5', body: 'Description' },
		{ id: 7, title: 'Javascript 6', body: 'Description' },
	]);

	const [post, setPost] = useState({title: '', body: ''});


	const addNewPost = (e) => {
		e.preventDefault()

		setPosts([...posts, {...post, id: Date.now()}])

		setPost({title: '', body: ''})
	};

	return (
		<div className='App'>
			<form>
				<MyInput
					value={post.title}
					onChange={(e) => setPost({...post, title: e.target.value})}
					type='text'
					placeholder='Post name'
				/>
				<MyInput
					value={post.body}
					onChange={(e) => setPost({...post, body: e.target.value})}
					type='text'
					placeholder='Post description'
				/>
				<MyButton onClick={addNewPost}>Create post</MyButton>
			</form>

			<PostList posts={posts} title='Posts about JS' />
		</div>
	);
}

export default App;
