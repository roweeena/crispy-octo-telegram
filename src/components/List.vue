<template>
  <div>
  <Input @expense-submitted="addExpense"></Input>

  </div>
</template>

<script>
import Input from '@/components/Input.vue'
export default {

  name: 'List',
  components:{
   Input
  },

data(){
  return{
    expenses: []
  }

  },
  methods: {
    addExpense(e) {
      this.expenses.push(e)

    }
  }

}
</script>

<style scoped>

</style>
