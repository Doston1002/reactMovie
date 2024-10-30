import MovieListItem from '../movie-list-item/movie-list-item'
import { useContext } from 'react'
import { Context } from '../../action'
import { filterHandler, searchHandler } from '../../utilities/data'

import './movie-list.css'

const MovieList = () => {
	const { state } = useContext(Context)

	const data = filterHandler(searchHandler(state.data, state.term), state.filter)

	return (
		<ul className='movie-list'>
			{data.map(item => (
				<MovieListItem key={item.id} {...item} />
			))}
		</ul>
	)
}

export default MovieList