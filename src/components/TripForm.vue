<template lang="html">
  <div class="">
    <h3> Where's your next holiday</h3>
    <form @submit.prevent="onSubmit">
      <div class="">
        <label> Destination: </label>
        <input v-model="location">
      </div>
      <div class="">
        <label> Date: </label>
        <input type="date" v-model="date">
      </div>
      <div class="">
        <label> Budget: </label>
        <input type="number" v-model="budget" placeholder="$..">
      </div>

      <button>Create a Trip</button>
    </form>

  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'TripForm',

  props: {
    trip: {
      type: Object,
      default(){
        return {
          location: null,
          date: null,
          budget: null
        }
      }
    }
  },

  methods: {
    onSubmit(){
      let tripData = {
        location: this.location,
        date: this.date,
        budget: this.budget
      }
      console.log('tripping hard', tripData)

      this.$emit('trip-submitted', tripData)
      router.push('dashboard')
    }
  }
}
</script>

<style lang="css" scoped>
div{
  margin: 15px;
}
</style>
