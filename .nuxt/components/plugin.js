import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Comment: () => import('../../components/Comment.vue' /* webpackChunkName: "components/comment" */).then(c => wrapFunctional(c.default || c)),
  Comments: () => import('../../components/Comments.vue' /* webpackChunkName: "components/comments" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  Post: () => import('../../components/Post.vue' /* webpackChunkName: "components/post" */).then(c => wrapFunctional(c.default || c)),
  PostDetails: () => import('../../components/PostDetails.vue' /* webpackChunkName: "components/post-details" */).then(c => wrapFunctional(c.default || c)),
  Posts: () => import('../../components/Posts.vue' /* webpackChunkName: "components/posts" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
