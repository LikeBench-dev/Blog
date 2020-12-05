<template>
  <client-only>
  <CommentTable
    :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td><span>{{ comment.name }}</span></td>
        <td><span>{{ comment.text }}</span></td>
        <td>
          <span v-if="comment.publish" class="status true"> Publish </span>
          <span v-else class="status false"> Hiden </span>
        </td>
        <td><span @click="changeComment(comment)" class="link"> Change
          Status
        </span></td>
        <td><span @click="deleteComment(comment.id)" class="link"> Delete
        </span></td>
      </tr>
    </tbody>
  </CommentTable>
  </client-only>
</template>

<script>
import CommentTable from "@/components/Admin/CommentTable";
import axios from 'axios'

export default {
  components: {
    CommentTable
  },
  layout: 'admin',
  data () {
    return {
      comments: []
    }
  },
  mounted () {
    this.loadComments()
  },
  methods: {
    loadComments () {
      axios
        .get(`https://blog-nuxt-81b4d-default-rtdb.europe-west1.firebasedatabase.app/comments.json`)
        .then(res => {
          if (!res.data) {res.data={}}
          let commentsArray = []
          Object.keys(res.data).forEach(key => {
            const comment = res.data[key]
            commentsArray.push({...comment, id: key})
          })
          this.comments = commentsArray
        })
    },
    changeComment (comment) {
      comment.publish = !comment.publish
      axios
        .put(`https://blog-nuxt-81b4d-default-rtdb.europe-west1.firebasedatabase.app/comments/${comment.id}.json`, comment)
    },
    deleteComment (id) {
      axios
        .delete(`https://blog-nuxt-81b4d-default-rtdb.europe-west1.firebasedatabase.app/comments/${id}.json`)
        .then(res => {
          this.loadComments()
        })
    }
  }
}
</script>
