import axios from 'axios'

export const state = () => ({
	postsLoaded: []
})
export const mutations = {
	setPosts (state, posts) {
		state.postsLoaded = posts
	},
	addPost (state, post) {
		console.log(post)
		state.postsLoaded.push(post)
	}
}
export const actions = {
	nuxtServerInit ({commit}, contex) {
		return axios.get('https://blog-nuxt-9b0a0.firebaseio.com/posts.json')
			.then(res => {
				const postsArray = []
				for (let key in res.data) {
					postsArray.push( { ...res.data[key], id: key } )
				}
				// Res
				commit('setPosts', postsArray)
			})
			.catch(e => console.log(e))
	},
	addPost ({commit}, post) {
		// console.log(post)
		return axios.post('https://blog-nuxt-9b0a0.firebaseio.com/posts.json', post)
		.then(res => {
			// console.log(res)
			commit('addPost',{ ...post, id: res.data.name })
		})
		.catch(e => console.log (e))
	}
}
export const getters = {
	getPostsLoaded (state) {
		return state.postsLoaded
	}
}