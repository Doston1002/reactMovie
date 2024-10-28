import { Component } from 'react'
import './movie-list-item.css'
class MovieListItem extends Component {
	constructor(props){
		super(props)
		this.state= {favourite:false, like:false}
	}

	onFavourite = () =>{
		this.setState(({favourite})=>({
			favourite:!favourite
		}))
	}

	onLike =()=> {
		this.setState(({like})=>({
			like:!like
		}))
	}
	render(){
		const {name, viewers, onDelete, onToggleLike, onToggleFavourite, favourite, like} = this.props


	return (
		<li className={`list-group-item d-flex justify-content-between  ${favourite && 'favourite'} ${like && 'like'}`}>
			<span  className='list-group-item-label' onClick={onToggleLike} data-toggle='like'>
				{name}
			</span>
			<input type='number' className='list-group-item-input' defaultValue={viewers} />
			<div className='d-flex justify-content-center align-items-center'>
				<button type='button' className='btn-cookie btn-sm' onClick={onToggleFavourite}  data-toggle='favourite'>
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
}
// const MovieListItem = ({name, viewers, favourite}) => {


// 	return (
// 		<li className={`list-group-item d-flex justify-content-between  ${favourite && 'favourite'}`}>
// 			<span  className='list-group-item-label' data-toggle='like'>
// 				{name}
// 			</span>
// 			<input type='number' className='list-group-item-input' defaultValue={viewers} />
// 			<div className='d-flex justify-content-center align-items-center'>
// 				<button type='button' className='btn-cookie btn-sm'  data-toggle='favourite'>
// 					<i className='fas fa-cookie'></i>
// 				</button>
// 				<button type='button' className='btn-trash btn-sm '>
// 					<i className='fas fa-trash'></i>
// 				</button>
// 				<i className='fas fa-star'></i>
// 			</div>
// 		</li>
// 	)
// }

export default MovieListItem
