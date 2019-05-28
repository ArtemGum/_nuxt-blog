<template>
	<PostsList :posts="posts"/>
</template>

<script>
export default {
	layout:'admin',
	data () {
		return {
			posts: [
				{
					id: 1,
					title: '1 post',
					descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg'
				},
				{
					id: 2,
					title: '2 post',
					descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					img: 'https://iheartdogs.com/wp-content/uploads/2017/09/Brite-Bite-0021-2.jpg'
				},
				{
					id: 3,
					title: '3 post',
					descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					img: 'https://dsvf96nw4ftce.cloudfront.net/images/detailed/2/thundercap-calming-cap-action4.jpg'
				},
			]
		}
	}
}
</script>