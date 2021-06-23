import { wrapFunctional } from './utils'

export { default as Comment } from '../../components/Comment.vue'
export { default as Comments } from '../../components/Comments.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as Post } from '../../components/Post.vue'
export { default as PostDetails } from '../../components/PostDetails.vue'
export { default as Posts } from '../../components/Posts.vue'

export const LazyComment = import('../../components/Comment.vue' /* webpackChunkName: "components/comment" */).then(c => wrapFunctional(c.default || c))
export const LazyComments = import('../../components/Comments.vue' /* webpackChunkName: "components/comments" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyPost = import('../../components/Post.vue' /* webpackChunkName: "components/post" */).then(c => wrapFunctional(c.default || c))
export const LazyPostDetails = import('../../components/PostDetails.vue' /* webpackChunkName: "components/post-details" */).then(c => wrapFunctional(c.default || c))
export const LazyPosts = import('../../components/Posts.vue' /* webpackChunkName: "components/posts" */).then(c => wrapFunctional(c.default || c))
