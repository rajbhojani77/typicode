<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        typicode
      </h1>
      <div class="links">
        <b-input-group prepend="UserId" class="mt-3">
          <b-form-input v-model="userId"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-success" @click="login">Button</b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    middleware: 'notAuthenticated',
  data() {
    return {
      Loading: false,
      userId: null,
      error: null
    };
  },
  methods: {
    async login() {
      this.Loading = true;
      try {
        const res = await this.$store.dispatch("login", {
          userId: this.userId
        });
        if (res) {
          this.$cookies.set("typicode",this.$store.state.auth);
          this.$router.push("/" +this.userId);
        }
        this.Loading = false;
      } catch (e) {
        console.log(e);
        this.Loading = false;
        this.error = e.message;
      }
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
