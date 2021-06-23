// const jwtDecode = require('jwt-decode')
export default {
  setAuth(state, data) {
    if (data) {
      state.auth = data
    } else {
      state.auth = null
    }
  }
}
