const initState = {
	posts: [
	{id: '1', title: 'Squirle Laid an Egg', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', },
	{id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', },
	{id: '3', title: 'a Helix Fossil was found', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', }
	]
}

const rootReducer = (state = initState, action) => {
	if (action.type === 'DELETE_POST') {
		let newPosts = state.posts.filter(post => {
			return action.id !== post.id
		});
		return {
			...state,
			posts: newPosts
		}
	}

	return state;
}

export default rootReducer;