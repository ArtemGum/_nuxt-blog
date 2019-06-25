<template>
	<div class="wrapper-content wrapper-content--fixed">
		<post :post="post" />
		<comments :comments="comments" />
		<newComment />
	</div>
</template>

<script>
import post from '@/components/Blog/Post.vue'
import newComment from '@/components/Comments/NewComment.vue'
import comments from '@/components/Comments/Comments.vue'

export default {
	components: { post, comments, newComment },
	data () {
		return {
			post: {},
			comments: [
				{ name: 'Alex', text:'Lorem ipsum dolor sit amet, consectetur' },
				{ name: 'Artem', text:'Lorem ipsum dolor sit amet, consectetur' }
			]
		}
	}
}
</script>

<style lang="scss">
.post {
	max-width: 900px;
	margin: 0 auto;
}
.post-header {
	text-align: center;
	margin-bottom: 30px;
	img {
		max-width: 400px;
		margin-bottom: 16px;
	}
	p {
		color: #999;
	}
}
.post-body {
	text-align: left;
}
</style>
