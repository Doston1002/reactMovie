import { useContext } from 'react'
import { Context } from '../../action'
import './movie-list-item.css'

const MovieListItem = props => {
	const { name, viewers, favourite, like, id } = props

	const { state, dispatch } = useContext(Context)

	const onDelete = () => {
		dispatch({ type: 'ON_DELETE', payload: id })
	}

	const onToggleProp = e => {
		const payload = {
			id,
			prop: e.currentTarget.getAttribute('data-toggle'),
		}
		dispatch({ type: 'ON_TOGGLE_PROP', payload })
	}

	return (
		<li
			className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${
				like && 'like'
			}`}
		>
			<span onClick={onToggleProp} className='list-group-item-label' data-toggle='like'>
				{name}
			</span>
			<input type='number' className='list-group-item-input' defaultValue={viewers} />
			<div className='d-flex justify-content-center align-items-center'>
				<button
					type='button'
					className='btn-cookie btn-sm'
					onClick={onToggleProp}
					data-toggle='favourite'
				>
					<i className='fas fa-cookie'></i>
				</button>
				<button type='button' className='btn-trash btn-sm ' onClick={onDelete}>
					<i className='fas fa-trash'></i>
				</button>
				<i className='fas fa-star'></i>
			</div>
		</li>
	)
}

export default MovieListItem