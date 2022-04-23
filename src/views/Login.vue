<template lang="">
    <div>
        <Nav />
        <div class="login-form">
            <input type="text" placeholder="email" v-model="email"/>
            <input type="text" placeholder="password" v-model="password"/>
            <input type="submit" @click="loginSubmit"/>
        </div>
    </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
    name: 'Login',
    components: {
        Nav
    },
    data(){
        return{
            email:null,
            password:null,
        }
    },
    methods: {
        loginSubmit(){
            console.log('form submitted!', this.email, this.password)
        }
    }
}
</script>
<style lang="">
    
</style>