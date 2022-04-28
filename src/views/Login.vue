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
import { login } from '../lib/api';

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
        async loginSubmit(){
            await login( this.email, this.password )
        }
    },
    
}
</script>
<style lang="">
    
</style>