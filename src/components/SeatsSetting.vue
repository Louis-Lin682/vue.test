<template>
  <div id="seats-setting" v-if="$store.state.tableCount">
    <h2>Seats Setting</h2>
    <ul>
      <li v-for="n in $store.state.tableCount" :key="n">
        {{ n }} / <input type="number" v-model.number="$store.state.seats[n-1]">
      </li>
    </ul>
    <button @click="createTable">Create Tables</button>
  </div>
</template>

<script>
export default {
  name: 'SeatsSetting',
  props: {
    
  },
  methods: {
    createTable() {
      // 因為index的createTable,用commit就會變成 ture
      this.$store.commit('createTable');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#seats-setting li {
  margin-bottom: 6px;
}
</style>
