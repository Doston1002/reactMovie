import { Component, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movie-add-form/movies-add-form';

const App = () => {
	const [data, setData] = useState([
		{
			name: "omar of ", viewers: 21, favourite: false, like: false, id: 1,
		},
		{
			name: "omar osman", viewers: 962, favourite: true, like: false, id: 2,
		},
		{
			name: "of osman", viewers: 92, favourite: false, like: false, id: 3,
		}
	]);
	const [term, setTerm] = useState('');
	const [filter, setFilter] = useState('all');

	const onDelete = id => {
		const newArr = data.filter(c => c.id !== id);
		setData(newArr);
	};

	const addForm = item => {
		const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false };
		const newArr = [...data, newItem];
		setData(newArr);
	};

	const onToggleProp = (id, prop) => {
		const newArr = data.map(item => {
			if (item.id === id) {
				return { ...item, [prop]: !item[prop] };
			}
			return item;
		});
		setData(newArr);
	};

	const searchHandler = (arr, term) => {
		if (term.length === 0) {
			return arr;
		}
		return arr.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
	};

	const filterHandler = (arr, filter) => {
		switch (filter) {
			case 'popular':
				return arr.filter(c => c.like);
			case 'mostViewers':
				return arr.filter(c => c.viewers > 500);
			default:
				return arr;
		}
	};

	const updateTermHandler = term => setTerm(term);

	const updateFilterHandler = filter => setFilter(filter);

	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo allMoviesCount={data.length} favouriteMovieCount={data.filter(c => c.favourite).length} />
				<div className='search-panel'>
					<SearchPanel updateTermHandler={updateTermHandler} />
					<AppFilter filter={filter} updateFilterHandler={updateFilterHandler} />
				</div>
				<MovieList data={filterHandler(searchHandler(data, term), filter)} onDelete={onDelete} onToggleProp={onToggleProp} />
				<MoviesAddForm addForm={addForm} />
			</div>
		</div>
	);
}

export default App;
