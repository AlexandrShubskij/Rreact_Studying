/** @format */

import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';

import './styles/App.css';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Javascript', body: 'Джаваскрипт' },
		{ id: 2, title: 'C++', body: 'Ц-плюс-плюс' },
		{ id: 3, title: 'Python', body: 'Питон' },
		{ id: 4, title: 'Ruby', body: 'Руби' },
		{ id: 5, title: 'Scala', body: 'Скала' },
		{ id: 6, title: 'Swift', body: 'Свифт' },
		{ id: 7, title: 'Pascal', body: 'Пасцал' },
	]);

	const [selectedSort, setSelectedSort] = useState('')

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const sortPosts = (sort) => {
		setSelectedSort(sort);
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
	}

	return (
		<div className='App'>
			<PostForm create={createPost} />
			<hr style={{margin: '15px 0'}}/>
			<div>
				<MySelect
					value={selectedSort}
					onChange={sortPosts}
					defaultValue='Sort by'
					options={[
						{value: 'title', name: 'By name'},
						{value: 'body', name: 'By description'},
					]}
				/>
			</div>
			{posts.length ? (
				<PostList remove={removePost} posts={posts} title='Posts about JS' />
			) : (
				<h1 style={{ textAlign: 'center', color: 'teal' }}>
					Posts not find!
				</h1>
			)}
		</div>
	);
}

export default App;
