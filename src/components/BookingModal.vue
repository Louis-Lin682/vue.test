<template>
  <div id="booking-modal">
    <label>
      Name <input v-model="$store.state.bookingInfo.name">
    </label><br>
    <label>
      Phone <input v-model="$store.state.bookingInfo.phone">
    </label><br>
    <label>
      Seats <input v-model="$store.state.bookingInfo.seats">
    </label><br>
    <label>
      Time <input v-model="$store.state.bookingInfo.time">
    </label><br>
    <button class="booking" @click="booking">Booking</button>
    <button class="cancel" @click="cancel">X</button>
  </div>
</template>

<script>
export default {
  name: 'BookingModal',
  props: {
    
  },
  methods: {
    booking() {
      // 去執行booking這個function
      this.$store.commit('booking');
      // 然後關閉視窗
      this.cancel();
    },
    cancel() {
      this.$store.commit('clearBookingId');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#booking-modal {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #777;
  padding: 30px 60px;
  background: white;
}

#booking-modal label {
  display: inline-block;
  margin-bottom: 10px;
}

#booking-modal button.booking {
  width: 100%;
}

#booking-modal button.cancel {
  position: absolute;
  top: 10%;
  right: 20px;
}

</style>
