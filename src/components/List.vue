<template>
  <div>
    <ul>

    <li v-for="(expense, index) in expenses" :key="index">
      <div class="">
        <strong> Expense: </strong> {{expense.item}}
      </div>
      <div class="">
        <strong> Amount:</strong>  ${{expense.amount}}
      </div>
      <div class="">
        <strong> Category: </strong> {{expense.category}}
      </div>


    </li>
    </ul>
    <button @click="saveToTrip">Save to trip</button>
  </div>
</template>

<script>

export default {

  name: 'List',
  props: {
    expenses: {
      type: Array,
      required: true
    }
  },
  methods: {
    saveToTrip(){
      console.log('this is supposed to save to the backend')
    }
  }


}
</script>

<style scoped>
  li{
    list-style: none;
    border: 1px solid #ccc;
    width: 600px;
    text-align: center;
    margin: 10px;
  }

</style>
