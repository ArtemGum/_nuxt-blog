<template>
	<section class="new-post">
		<div class="container">
			<form @submit.prevent="">
				<AppInput v-model="post.title"> Title: </AppInput>
				<AppInput v-model="post.descr"> Descr: </AppInput>
				<AppInput v-model="post.img"> Img Link </AppInput>
				<AppTextArea v-model="post.content"> Content: </AppTextArea>
				<!-- buttons -->
				<div class="controls">
					<AppButton class="btnDanger" @click="cancel"> Cancel </AppButton>
					<AppButton @click="onSubmit"> Save </AppButton>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		postEdit: {
			type: Object,
			required: false
		}
	},
	data () {
		return {
			post: this.postEdit ? { ...this.postEdit } : {
				title: '',
				descr: '',
				img: '',
				content: ''
			}
		}
	},
	methods: {
		onSubmit () {
			this.$emit('submit', this.post)
		},
		cancel () {
			this.$router.push('/admin/')
		}
	}
}
</script>

<style lang="scss" scoped>
.controls {
	text-align: center;
	margin: 20px 0;
}
</style>
