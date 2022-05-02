/** @format */

import React, { useMemo, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
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

	const [filter, setFilter] = useState({sort: '', query: ''})


	const sortedPosts = useMemo(() => {
		console.log('Func worked')
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		return posts
	}, [filter.sort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
	}, [filter.query, sortedPosts])

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	return (
		<div className='App'>
			<PostForm create={createPost} />
			<hr style={{margin: '15px 0'}}/>
			<PostFilter
				filter = {filter}
				setFilter = {setFilter}
			/>
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts about programming languages' />
		</div>
	);
}

export default App;
