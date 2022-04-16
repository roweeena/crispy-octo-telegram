<template>
    <Nav/>
  <div class="home">

    <HelloWorld msg="Welcome"/>
    <p>Click below to get started</p>
    <button @click="redirect">Start</button>
    <button @click="signup">Create an account</button>

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Nav from '@/components/Nav.vue';
import router from '@/router'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Nav
  },

  methods: {
    redirect(){
        router.push('new-expense')
  },
  signup(){
        router.push('signup')
  }
}
}
</script>

<style scoped>

.home{
  text-align: center;
}

</style>
