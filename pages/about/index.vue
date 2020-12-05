<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title"> About my blog: </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam consequuntur deserunt, dicta dolor inventore ipsam modi obcaecati odit pariatur possimus quam quia ratione saepe suscipit totam vitae voluptatem voluptatibus? </p>
          <Intro title="Lorem ipsum dolor sit amet" />
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam consequuntur deserunt, dicta dolor inventore ipsam modi obcaecati odit pariatur possimus quam quia ratione saepe suscipit totam vitae voluptatem voluptatibus? </p>
        <img src="@/assets/img/about.jpg" alt="">
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam consequuntur deserunt, dicta dolor inventore ipsam modi obcaecati odit pariatur possimus quam quia ratione saepe suscipit totam vitae voluptatem voluptatibus? </p>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  head () {
    let title = 'About My SSR Blog!',
      descr = 'About My SSR Blog! With nuxt.js',
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

<style lang="scss">
.about {
  text-align: center;
  p {
    margin-bottom: 10px;
  }
}
</style>
