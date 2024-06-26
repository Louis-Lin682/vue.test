<template>
  <div id="create-table">
    <h2>table counts?</h2>
    <input type="number" v-model.number="$store.state.tableCount">
  </div>
</template>

<script>
export default {
  name: 'CreateTable',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
