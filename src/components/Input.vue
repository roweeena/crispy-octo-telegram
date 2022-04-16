<template>
  <div>
    <form @submit.prevent="onSubmit">
    Expense: <input type="text" v-model="item">
    Amount spent: <input type="text" v-model.number="amount">
    Category: <select v-model="category">
      <option disabled value="">Please select one</option>
      <option value="food">Food</option>
      <option value="accommodation">Accommodation</option>
      <option value="play">Play</option>
    </select>
    <button>Add expense to trip</button>
  </form>

  </div>
</template>

<script>

export default {

  name: 'Input',

  data(){
    return{
      amount: null,
      item: '',
      category:''
    }
  },

  methods: {
    onSubmit() {
      console.log('hello');
      let expenseData ={
        amount: this.amount,
        item: this.item,
        category: this.category
      }
      console.log('expense', expenseData);
      this.$emit('expense-submitted', expenseData)
      this.amount = null,
      this.item = '',
      this.category = ''


    }
  }

}
</script>

<style scoped>

</style>
