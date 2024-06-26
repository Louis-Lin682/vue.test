import { createStore } from 'vuex'

export default createStore({
  state: {
    // 桌子數一開始設為0
    tableCount: null,
    // 座位設為空
    seats:[],
    // 是否更新訂位一開始為 false
    isTableCreated: false,
    // 訂位資訊
    bookingInfos: [],
    // booking ID
    bookingId: null,
    // 訂位詳細資訊
    bookingInfo: {
      name: null,
      phone: null,
      seats: null,
      time: null,
    },
  },
  getters: {
  },
  mutations: {
    // 公用 所以寫在index,傳上方 state.isTableCreated = true
    createTable(state) {
      state.isTableCreated = true;
    },
    recordBookingId(state, id) {
      // 把booking ID設為我們新的ID
      state.bookingId = id;
    },
    // 關閉訂位資訊
    clearBookingId(state) {
      state.bookingId = null;
    },
    // 建立一份bookingInfos
    booking(state) {
      // 複製一份新的物件去融合
      state.bookingInfos[state.bookingId] = Object.assign({}, state.bookingInfo);
    },
    // 清空訂位資訊
    clearBookingInfo(state) {
      state.bookingInfo = {
        name: null,
        phone: null,
        seats: null,
        time: null,
      }
    },
    // 讀取訂位資訊
    loadBookingInfo(state) {
      state.bookingInfo = Object.assign({}, state.bookingInfos[state.bookingId]);
    }
  },
  actions: {
  },
  modules: {
  }
})
