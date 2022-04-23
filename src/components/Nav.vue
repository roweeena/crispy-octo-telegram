<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/new-expense">Form</router-link> |
      <router-link to="/login">Login</router-link> | 
      <router-link to="/signup">Signup</router-link>
      <p>Welcome, {{currentUser}} </p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data() {
    return {

    }
  },
  methods:{
    setCurrentUser(){
      console.log('set user called from child')
    }
  }
}
</script>

<style scoped>

</style>