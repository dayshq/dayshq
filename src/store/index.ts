import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      signedIn: false,
      token: null,
      currentUser: {
        lastSeen: '',
        avatar: '',
        username: ''
      },
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});
