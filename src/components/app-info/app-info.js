import { useContext } from 'react'
import { Context } from '../../action'
import './app-info.scss'

const AppInfo = ({ allMoviesCount, favouriteMovieCount }) => {
	const { state } = useContext(Context)

	return (
		<div className='app-info'>
			<p className='fs-3 text-uppercase'>Barcha kinolar soni: {state.data.length}</p>
			<p className='fs-4 text-uppercase'>
				Sevimli film: {state.data.filter(c => c.favourite).length}
			</p>
		</div>
	)
}

export default AppInfo