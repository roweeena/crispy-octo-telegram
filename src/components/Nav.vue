<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/new-expense">Form</router-link> |
      <router-link to="/login">Login</router-link> | 
      <router-link to="/signup">Signup</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>