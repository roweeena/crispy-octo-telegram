<template>
  <div>
    <Nav />
    <Input @expense-submitted="addExpense"></Input>
    <List :expenses="expenses"></List>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import List from '@/components/List.vue'
import Nav from '@/components/Nav.vue'
export default {
  name: 'Form',
  components: {
    Input,
    List,
    Nav
  },
  data() {
    return {
      expenses: []
    }
  },
  methods: {
    addExpense(expense){
      this.expenses.push(expense)
    }
  }
}
</script>

<style scoped>

</style>
