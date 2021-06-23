export default function({ store, redirect, route }) {
  if (store.state.auth != null) {
    return redirect('/'+store.state.auth.userId)
  }
}
