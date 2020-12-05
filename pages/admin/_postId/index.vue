<template>
  <newPostForm
    :postEdit="post"
    @submit="onSubmit"/>
</template>

<script>
import axios from 'axios'

import newPostForm from '@/components/Admin/newPostForm'
export default {
  components: {
    newPostForm
  },
  layout: 'admin',
  asyncData (context) {
    return axios.get(`https://blog-nuxt-81b4d-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.postId}.json`)
      .then(res => {
        return {
          post: {...res.data, id: context.params.postId}
        }
      })
      .catch(e => {
        context.error(e)
      })
  },
  methods: {
    onSubmit (post) {
      this.$store.dispatch('editPost', post)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>
