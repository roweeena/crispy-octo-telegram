<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/new-expense">Form</router-link>
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