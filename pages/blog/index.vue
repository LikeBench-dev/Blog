<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts:"/>
    <PostsList :posts="postsLoaded"/>
  </div>
</template>


<script>


export default {
  computed: {
    postsLoaded () {
      // console.log(this.$store.getters.getPostsLoaded);
      return this.$store.getters.getPostsLoaded
    }
  },
  head () {
    let title = 'My Blog Page!',
      descr = 'My SSR Blog! With nuxt.js',
      type = 'site'
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
}
</script>

