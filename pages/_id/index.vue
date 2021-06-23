<template>
  <div id="app">
    <h1>UserID: {{ userId }}</h1>
    <div>
      <b-form inline @submit.prevent="createPost">
        <label class="sr-only" for="inline-form-input-name">Title</label>
        <b-form-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Title"
          v-model="PostData.title"
        ></b-form-input>

        <label class="sr-only" for="inline-form-input-username">Body</label>
          <b-form-input
            id="inline-form-input-username"
            placeholder="Body"
            v-model="PostData.body"
          ></b-form-input>
        </b-input-group>

        <b-button variant="primary" type="submit">add post</b-button>
      </b-form>
    </div>
    <posts :postsData="posts"></posts>
  </div>
</template>

<script>
import Posts from "@/components/Posts";
import axios from "axios";

export default {
  components: {
    Posts
  },
  data() {
    return {
      posts: [],
      userId: this.$route.params.id,
      PostData: {
        title: "",
        body: "",
        userId: this.$route.params.id
      }
    };
  },
  methods: {
    fetch() {
      let that = this;
      axios
        .get(
          "https://jsonplaceholder.typicode.com/posts?userId=" +
            this.$route.params.id
        )
        .then(function(response) {
          that.posts = response.data.map(post => {
            post.showDetails = false;
            post.showComments = false;
            post.comments = [];
            return post;
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async createPost() {
      try {
        await this.$store.dispatch("createPost", this.PostData);
      } catch (e) {
        console.log(e);
      }
    }
  },
  created() {
    this.fetch();
  }
};
</script>
