<template>
  <div>
      <Nav/>
      <div class="home">
        <h1>Current Token {{id}}</h1>
        <p>Click below to get started</p>
        <button @click="redirect">Start</button>
        <button @click="signup">Create an account</button>
      </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import router from '@/router'
import { verifyLogin } from '../lib/api';


export default {
  name: 'Home',
  components: {
    Nav
  },
  data(){
    return{
      // currentUser: false
      id:undefined
    }
  },
  methods: {
    redirect(){
      router.push('new-expense')
    },
    signup(){
      router.push('signup')
    },
    async getUser(){
      await verifyLogin(this.id)
    }
  },
  mounted(){
    this.id = localStorage.getItem('currentUserid')
    if(this.id){
      this.getUser()
    }

  },

}
</script>

<style scoped>

.home{
  text-align: center;
}

</style>
