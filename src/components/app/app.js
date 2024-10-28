import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movie-add-form/movies-add-form';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					name: "omar of ", viewers: 21, favourite: false, like:false, id: 1,
				},
				{
					name: "omar osman", viewers: 962, favourite: true, like:false, id: 2,
				},
				{
					name: "of osman", viewers: 92, favourite: false,  like:false, id: 3,
				}
			]
		};
	}

	onDelete = (id) => {
		this.setState(({data})=>{
			return{
				data:data.filter(c=> c.id!==id),
			}
		})
	};

	addForm =item=> {
		const newItem ={ name:item.name, viewers:item.viewers, id:uuidv4(), favourite:false, like:false}
		this.setState(({data})=>({
			data: [...data, newItem ],
			
			
		}))
		
	}
	onToggleFavourite= id =>{
		console.log(`favorite ${id}`);
		
	}
	onToggleLike= id =>{
		console.log(`like ${id}`);
		
	}
	render() {
		const { data } = this.state; 
		return (
			<div className='app font-monospace'>
				<div className='content'>
					<AppInfo />
					<div className='search-panel'>
						<SearchPanel />
						<AppFilter />
					</div>
					<MovieList data={data} onDelete={this.onDelete} onToggleFavourite={this.onToggleFavourite} onToggleLike={this.onToggleLike}/>
					<MoviesAddForm addForm={this.addForm}/>
				</div>
			</div>
		);
	}
}

export default App;
