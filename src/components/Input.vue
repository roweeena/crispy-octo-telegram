<template>
  <div>
    <h3> Add an expense</h3>
    <form @submit.prevent="onSubmit">
      <div class="">
          Expense: <input type="text" v-model="item">
      </div>
      <div class="">
        Amount spent: <input type="text" v-model.number="amount" placeholder="$">
      </div>
      <div class="">
        Category: <select v-model="category">
          <option disabled value="">Please select one</option>
          <option value="Food">Food</option>
          <option value="Accommodation">Accommodation</option>
          <option value="Leisure">Leisure</option>
          <option value="Gifts">Gifts</option>
          <option value="Transport">Transport</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>

      </div>


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
  div{
    margin: 15px;
  }

</style>
