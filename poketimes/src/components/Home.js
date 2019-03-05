import React, { Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Home extends Component {
	state = {
		posts: []
	};
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then( res => {
			this.setState({
				posts: res.data.slice(0,10)
			});
		});
	}
	render() {
		const { posts } = this.state;
		const postList = posts.length ? (
			posts.map((post) => {
				return (
					<div className="post card" key={post.id}>
						<div className="card-content">
							<Link to={'/' + post.id}>
								<span className="card-title">
									<p>{post.body}</p>
								</span>
							</Link>
						</div>
					</div>	
				)
			})
			) : (
			<div className="center">No Posts Yet</div>
			)

		return (
				<div className="container">
					<h4 className="container center">Home</h4>
				{postList}
				</div>
			)
		}
}
export default Home;