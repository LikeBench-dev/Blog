<template>
  <PostsList :admin=true :posts="postsLoaded"/>
</template>

<script>
export default {
  layout: 'admin',
  computed: {
    postsLoaded () {
      // console.log(this.$store.getters.getPostsLoaded);
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>
