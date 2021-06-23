<template>
  <div>
    <div>
      <b-form inline @submit.prevent="createComment">
        <label class="sr-only" for="inline-form-input-username">Body</label>
          <b-form-input
            id="inline-form-input-username"
            placeholder="Body"
            v-model="newcommentData.body"
          ></b-form-input>
        </b-input-group>

        <b-button variant="primary" type="submit">add comment</b-button>
      </b-form>
    </div>
    <comment v-for="comment in commentsData" :commentData="comment"></comment>
  </div>
</template>
<script>
import Comment from "./Comment";
export default {
  props: ["commentsData","postId"],
  components: { Comment },
  data() {
    return {
      newcommentData: {
        postId:this.postId,
        body:'',
      }
    };
  },
  methods: {
    async createComment() {
      try {
        await this.$store.dispatch("createComment", this.newcommentData);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
