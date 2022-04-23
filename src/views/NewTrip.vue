<template lang="html">
  <div class="">
    <TripForm  @trip-submitted="createNewTrip" />
  </div>
</template>

<script>
import TripForm from '@/components/TripForm.vue'
 import {createTrip} from '../lib/api'
export default {
  name: 'NewTrip',
  components: {
    TripForm
  },

  methods: {
    async createNewTrip(trip){

      console.log('new trip', trip)
      const res = await createTrip(trip)
      return res.data
    }
  }
}
</script>

<style lang="css" scoped>
</style>
