<template>
  <div>
    <h2>Posts</h2>
    <div id="postlist">
      <post :postData="post" v-for="(post, index) in postsData"></post>
    </div>
  </div>
</template>
<script>
  import Post from './Post'
  export default {
    props: ['postsData'],
    components: {Post}
  }
</script>