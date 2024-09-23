import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'

export const userDataStore = defineStore('userData',{
  state: () => ({
    userData: [],
    activeUsers: [],
  }),

  getters: {
    getuserData(state){
      return state.userData
    },
    getactiveUsers(state){
      return state.activeUsers
    },
  },

  actions: {

    setUserData(data) {
      this.userData = data;
    },

    setActiveUser(index){
      this.activeUsers = [];
      this.activeUsers = this.userData[index];
      
    }

  },
})
