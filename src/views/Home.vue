<template>
    <Nav/>
    <div class="home">
      <h1>Current Token {{token}}</h1>
      <p>Click below to get started</p>
      <button @click="redirect">Start</button>
      <button @click="signup">Create an account</button>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import router from '@/router'

export default {
  name: 'Home',
  components: {
    Nav
  },
  data(){
    return{
        // currentUser: false
        token:undefined
    }
  },
  methods: {
    redirect(){
          router.push('new-expense')
    },
    signup(){
          router.push('signup')
    }
  },
  mounted(){
    console.log('yoyoyo')
    this.token = localStorage.getItem('currentUserToken')
  },

}
</script>

<style scoped>

.home{
  text-align: center;
}

</style>
