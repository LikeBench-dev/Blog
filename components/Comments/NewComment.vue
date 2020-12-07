<template>
  <section class="new-comment">
    <div class="container">
      <!--     message-->
      <Message v-if="message" :message="message"/>

      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="comment.name"> Name: </AppInput>
        <AppTextarea v-model="comment.text"> Text: </AppTextarea>

        <!--       buttons-->
        <div class="controls">
          <AppButton>Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'

export default {
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      message: null,
      comment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit () {
      // console.log({...this.comment})
      this.$store.dispatch('addComment', {
        postId: this.postId,
        publish: false,
        ...this.comment
      })
      .then(() => {
        this.message = 'Submited!'
        console.log({...this.comment})
        // Reset
        this.comment.name = ''
        this.comment.text = ''
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  .title {
  }
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}
</style>
