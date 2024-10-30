import { useContext, useState } from 'react'
import { Context } from '../../action'
import './search-panel.css'

const SearchPanel = () => {
	const [term, setTerm] = useState('')
	const { _, dispatch } = useContext(Context)

	const updateTermHandler = e => {
		const term = e.target.value.toLowerCase()
		setTerm(term)
		dispatch({ type: 'ON_TERM', payload: term })
	}

	return (
		<input
			type='text'
			className='form-control search-input'
			placeholder='Kinolarni qidirish'
			onChange={updateTermHandler}
			value={term}
		/>
	)
}

export default SearchPanel