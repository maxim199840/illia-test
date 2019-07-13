import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import user from './user/user.module';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'illia-test',
  storage: localStorage,
});

export default new Vuex.Store({
  modules: {
    user,
  },
  plugins: [vuexPersist.plugin],
});
