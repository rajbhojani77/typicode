export default function({ store, redirect, route }) {
  if (store.state.auth != null) {
    const auth = JSON.parse(store.state.auth);
    return redirect('/'+auth.id)
  }
}
