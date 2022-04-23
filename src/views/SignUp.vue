<template lang="">
    <div>
        <Nav />
        <div class="login-form">
            <input type="text" placeholder="email" v-model="email"/>
            <input type="text" placeholder="password" v-model="password"/>
            <input type="submit" @click="signInSubmit"/>
        </div>
    </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import { signup } from '../lib/api';

export default {
    name: 'Signup',
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
        async signInSubmit(){
            // console.log('form submitted!', this.email, this.password)
            await signup(this.email, this.password )

        }
    }
}
</script>
<style lang="">
    
</style>