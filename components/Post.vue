<template>
  <div class="post">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block  @click="postData.showDetails = !postData.showDetails" variant="info"
          >{{postData.title}}</b-button
        >
      </b-card-header>
        <b-card-body>
          <transition name="fade">
            <post-details
              :postData="postData"
              v-if="postData.showDetails"
            ></post-details>
          </transition>
        </b-card-body>
    </b-card>
  </div>
</template>
<script>
import PostDetails from "./PostDetails";

export default {
  components: { PostDetails },
  props: ["postData"],
};
</script>
<style>
.card-body {
    padding: 0.2rem;
}
.post {
  padding: 0.3em;
  margin: 0.3em;
}
.post > h2:hover {
  background-color: #eee;
  cursor: pointer;
}
.post > h2 {
  margin: 0.1em;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
