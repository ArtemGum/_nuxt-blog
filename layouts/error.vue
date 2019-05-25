<template>
	<div class="not-found">
		<div class="container">
			<div class="not-found__wrapper">
				<p class="title">Page Not found</p>
				<nuxt-link to="/"> Back to main page </nuxt-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.not-found__wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 80vh;
}
</style>
