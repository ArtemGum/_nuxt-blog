<template>
	<div class="wrapper-content wrapper-content--fixed">
		<promo />
		<Intro title="My lasts posts: "/>
		<PostsList :posts="postsLoaded"/>
		<contacts />
	</div>
</template>

<script>
import promo from '@/components/Promo.vue'
import contacts from '@/components/Contacts.vue'
export default {
	head () {
		let title = 'My Blog Page!',
				descr = 'My SSR Blog! With Nuxt.js!',
				type ='site'

		return {
			title: title,
			meta: [
				{ hid: 'og:title', name: 'og:title', content: title },
				{ hid: 'description', name: 'description', content: descr },
				{ hid: 'og:description', name: 'og:description', content: descr },
				{ hid: 'og:type', name: 'og:type', content: type }
			]
		}
	},
	components: {
		promo,
		contacts
	},
	computed: {
		postsLoaded () {
			return this.$store.getters.getPostsLoaded
		}
	}
}
</script>
