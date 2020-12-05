<template>
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSubmit" class="auth__form">
        <AppInput type="email" v-model="user.email"> Login: </AppInput>
        <AppInput type="password" v-model="user.password"> Password:
        </AppInput>
        <div class="controls">
          <AppButton> Sing In </AppButton>
        </div>

      </form>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  mounted() {
    console.log(this.$store.getters.getPostsLoaded);
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('authUser', this.user)
      .then((res) => {
        console.log(this.$store.getters.getPostsLoaded);
        this.$router.push('/admin')
      })
      .catch(e => {
        console.log(e)
        // Reset
        this.user.email = ''
        this.user.password = ''
      })
    }
  }
}
</script>

<style lang="scss">
.auth {
  //max-width: 400px;
  text-align: center;
}
.auth__form {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  input {
    max-width: 460px;
  }
}
</style>
