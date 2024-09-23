import { defineStore } from 'pinia'

export const userDataStore = defineStore('userData',{
  state: () => ({
    userData: [],
    activeUsers: [],
    loadingStatus: '',
  }),

  getters: {
    getuserData(state){
      return state.userData
    },
    getactiveUsers(state){
      return state.activeUsers
    },
    getloadingStatus(state){
      return state.loadingStatus
    }
  },

  actions: {
    setUserData(data) {
      this.loadingStatus = true;
      setTimeout(() => {
        this.userData = data;
        this.loadingStatus = false; 
      }, 400);
    },

    setActiveUser(index){
      this.loadingStatus = true;
      setTimeout(() => {
        this.activeUsers = [];
        this.activeUsers = this.userData[index];
        this.loadingStatus = false; 
      }, 400);
    }

  },
})
