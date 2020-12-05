<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <client-only>
    <comments :comments="comments"/>
    <newComment :postId="$route.params.id"/>
    </client-only>
  </div>
</template>

<script>
import post from '@/components/Blog/Post'
import newComment from '@/components/Comments/NewComment'
import comments from '@/components/Comments/Comments'

import axios from 'axios'

export default {
  components: {
    post, newComment, comments
  },
  head () {
    let title = this.post.title,
      descr = this.post.descr,
      img = `site.com/${this.post.img}`,
      type = 'article'
    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type },
        { hid: 'og:img', name: 'og:img', content: img }
      ]
    }
  },
  async asyncData (context) {
    let [post, comments] = await Promise.all([
      axios.get(`https://blog-nuxt-81b4d-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.id}.json`),
      axios.get(`https://blog-nuxt-81b4d-default-rtdb.europe-west1.firebasedatabase.app/comments.json`)
    ])
    if (!comments.data) { comments.data = {}; }
    let commentsArrayRes = Object.values(comments.data).filter(comment => (comment.postId === context.params.id) && comment.publish)

    return {
      post: post.data,
      comments: commentsArrayRes
    }
  }
}
</script>


<style lang="scss">
.post{
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
    color: #999999;
  }
}
.post-body {
  text-align: left;
}
</style>
