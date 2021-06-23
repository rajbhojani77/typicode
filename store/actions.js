import cookieparser from 'cookieparser'
import Cookies from 'js-cookie'

function showToast(ctx, message, variant = `success`) {
  ctx._vm.$bvToast.toast(`${message}`, {
    title: ` `,
    variant: `${variant}`,
    toaster: 'b-toaster-bottom-right',
    solid: true,
    appendToast: true
  })
}

export default {
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = parsed.typicode
        console.log(auth)
      } catch (err) {
        console.log(err)
      }
    }
    commit('setAuth', auth)
  },
  async login({ commit }, { userId }) {
    return await this.$axios({
      method: 'get',
      url: `/users/`+userId,
    })
      .then((response) => {
        commit('setAuth', response.data)
        return true
      })
      .catch((error) => {
        showToast(this, error.message, `danger`)
        return false
      })
  },
  async createPost({ commit }, postData) {
    await this.$axios({
      method: "POST",
      url: "/posts",
      data: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: this.state.auth.userId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        showToast(this, "post created", `success`);
      })
      .catch(error => {
        showToast(this, error.message, `danger`);
      });
  },
  async createComment({ commit }, commenttData) {
    await this.$axios({
      method: "POST",
      url: "/posts/"+commenttData.postId+"/comments",
      data: JSON.stringify({
        name: this.state.auth.name,
        email: this.state.auth.email,
        body: commenttData.body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        showToast(this, "comment added", `success`);
      })
      .catch(error => {
        showToast(this, error.message, `danger`);
      });
  }
}
