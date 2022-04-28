<template lang="">
    <div>

        <h1>CHANGE YA NAME</h1>
        <input id="nameField" type="text" placeholder="username" v-model="username"/>
        <input type="submit" @click="editUserSubmit"/>
    </div>
</template>
<script>
import { editUser } from '../lib/api';


export default {
    name: 'ProfileEdit',
    components: {

    },
    data(){
        return{
            currentUser:this.getUser(),
            username:''
        }
    },
    methods: {
        getUser(){
            console.log('getting user...')
            let user = JSON.parse(localStorage.getItem('currentUser')) 
            console.log(user)
            return user
        },
        async editUserSubmit(){
            await editUser( this.username )
        }
    },
    mounted(){
        if(this.currentUser.name !== 'unnamed'){
            console.log(
                'unnamed user'
            )
            document.getElementById('nameField').value = this.currentUser.name
        }
    }
}
</script>
<style lang="">
    
</style>