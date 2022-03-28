import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    listDevices: [],
  },
  mutations: {
    loggedUser(state) {
      state.isLogged = true;
    },
    logoutUser(state) {
      state.isLogged = false;
    },
    saveListDevices(state, { listDevices }) {
      state.listDevices = listDevices;
    },
  },
  actions: {
    loggedUserAction(context) {
      context.commit("loggedUser");
    },
    logoutUserAction(context) {
      context.commit("logoutUser");
    },
    saveDevicesAction({ commit }, listDevices) {
      commit("saveListDevices", listDevices);
    },
  },
  modules: {},
});
