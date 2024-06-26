<template>
  <h1>Booking System</h1>
  <!-- 如果$store.state.tableCount未設定就不顯示 -->
  <template v-if="!$store.state.isTableCreated">
    <create-table></create-table>
    <seats-setting></seats-setting>
  </template>
  <!-- 如果已經設定就跑出來 -->
  <DataTables v-if="$store.state.isTableCreated"></DataTables>
  <!-- 如果bookingId有的話就出現,設為null讓第一個不等於false -->
  <booking-modal v-if="$store.state.bookingId!=null"></booking-modal>
</template>

<script>
import CreateTable from './components/CreateTable.vue'
import SeatsSetting from './components/SeatsSetting.vue'
import DataTables from './components/DataTables.vue'
import BookingModal from './components/BookingModal.vue'
export default {
  name: 'App',
  components: {
    CreateTable,
    SeatsSetting,
    DataTables,
    BookingModal,
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding-left: 0;
}
</style>
