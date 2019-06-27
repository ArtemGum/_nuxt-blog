<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section class="about">
			<div class="container">
				<h1 class="title">About my blog: </h1>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora consequatur reprehenderit nisi aliquam! Error labore qui dignissimos similique fugit earum laboriosam tenetur eligendi, harum placeat debitis, dicta voluptate rerum neque inventore sint saepe nam nesciunt tempore corporis? Assumenda eaque modi maxime a libero, eius provident cupiditate iure dolores facilis sequi.</p>
				<img src="@/assets/img/about.jpg" alt="">
				<Intro title="Lorem ipsum dolor sit amet"/>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora consequatur reprehenderit nisi aliquam! Error labore qui dignissimos similique fugit earum laboriosam tenetur eligendi, harum placeat debitis, dicta voluptate rerum neque inventore sint saepe nam nesciunt tempore corporis? Assumenda eaque modi maxime a libero, eius provident cupiditate iure dolores facilis sequi. </p>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora consequatur reprehenderit nisi aliquam! Error labore qui dignissimos similique fugit earum laboriosam tenetur eligendi, harum placeat debitis, dicta voluptate rerum neque inventore sint saepe nam nesciunt tempore corporis? Assumenda eaque modi maxime a libero, eius provident cupiditate iure dolores facilis sequi. </p>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora consequatur reprehenderit nisi aliquam! Error labore qui dignissimos similique fugit earum laboriosam tenetur eligendi, harum placeat debitis, dicta voluptate rerum neque inventore sint saepe nam nesciunt tempore corporis? Assumenda eaque modi maxime a libero, eius provident cupiditate iure dolores facilis sequi. </p>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	head () {
		let title = 'About My SSR Blog!',
				descr = 'About My SSR Blog! With Nuxt.js!',
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
	}
}
</script>


<style lang="scss">
.about {
	text-align: center;
	p {
		margin-bottom: 10px;
	}
}
</style>
