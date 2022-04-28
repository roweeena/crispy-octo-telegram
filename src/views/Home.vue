<template>
  <div>
    <div class="home-page">

      <Nav />
      <div class="home">
        <h1>Current name {{name}}</h1>
        <p>Click below to get started</p>
        <button @click="redirect">Start</button>
        <button @click="signup">Create an account</button>
      </div>
    </div>
  </div>
</template>

<script>
// import ProfileEdit from './views/ProfileEdit.vue'
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
      name:undefined,
      currentUser: {},
      thisUser:function(){
      console.log(this.currentUser)
      }
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
      verifyLogin(this.id)
    },
  },
  mounted(){
    this.name = localStorage.getItem('currentUserName')
    if(this.name){ // WE DON'T ACTUALLY NEED THIS. THE LOGIN GIVE'S AN ID BUT WE CAN ALSO JUST SENT THROUGH THE USERNAME/EMAIL ON SUCCESSFUL LOGIN. WE ONLY NEED AN API REQUEST WHEN GETTING OR POSTING TRIPS!!!!!!!!!!!!!!!!!!!
      this.currentUser = this.getUser()
    }

  },

}
</script>

<style scoped>

.home{
  text-align: center;
}

</style>
