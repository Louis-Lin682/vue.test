<template>
  <div id="tables">
    <ul>
      <li v-for="(seats, index) in $store.state.seats" @click="openModal(index)" :key="index">
        <template v-if="!$store.state.bookingInfos[index]">
          0 / {{ seats }} 位
        </template>
        <template v-else>
          <p>{{ $store.state.bookingInfos[index].seats }} / {{ seats }} 位</p>
          <p>{{ $store.state.bookingInfos[index].name }} / 先生/小姐</p>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DataTables',
  props: {
    
  },
  methods: {
    openModal(index) {
      this.$store.commit('recordBookingId', index);
      // 如果這個booking資訊是空的,就把舊有的清除
      if(!this.$store.state.bookingInfos[index]) {
        this.$store.commit('clearBookingInfo');
      }else {
        // 如果有,就顯示
        this.$store.commit('loadBookingInfo');
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tables ul {
  display: flex;
}

#tables li {
  margin-right: 15px;
  border: 1px solid #777;
  padding: 15px 20px;
}

#tables p {
  margin: 0;
  margin-bottom: 10px;
}
</style>
