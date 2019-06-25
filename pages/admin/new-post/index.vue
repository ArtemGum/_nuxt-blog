<template>
	<newPostForm @submit="onSubmit"/>
</template>

<script>
import newPostForm from '@/components/Admin/newPostForm.vue'
export default {
	components: { newPostForm },
	layout: 'admin',
	methods: {
		onSubmit (post) {
			// console.log('Post added')
			// console.log(post)
			this.$store.dispatch('addPost', post)
				.then(()=>{
					this.$router.push('/admin')
				})
		}
	}
}
</script>
