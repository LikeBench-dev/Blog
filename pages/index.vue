<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro title="My last posts:"/>
<!--    posts-->
    <PostsList :posts="postsLoaded"/>
    <contacts />
  </div>
</template>


<script>
import promo from '@/components/Promo'
import contacts from '@/components/Contacts'

export default {
  components: {
    promo, contacts
  },
  head () {
    let title = 'My SSR Blog!',
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
  created () {
    this.$store.dispatch('nuxtServerInit')
  },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>


