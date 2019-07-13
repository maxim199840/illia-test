import { CREATE_USER, REMOVE_USER, UPDATE_USER, IMPORT_USERS } from './mutations.type';
import Vue from 'vue';

interface State {
  user: any | null;
  errors: any;
}

const store: State = {
  user: null,
  errors: {},
};

const getters = {
  user(state: State) {
    return state.user;
  },
  userErrors(state: State) {
    return state.errors;
  },
};

const actions = {

};

const mutations = {
  [CREATE_USER](state: State, user: any) {
    state.user = user;
    state.errors = {};
  },
  [UPDATE_USER](state: State, errors: any) {
    if (errors.errors) {
      state.errors = errors.errors;
    } else {
      state.errors = errors;
    }
  },
  [REMOVE_USER](state: State, errors: any) {
    if (errors.errors) {
      state.errors = errors.errors;
    } else {
      state.errors = errors;
    }
  },
  [IMPORT_USERS](state: State, errors: any) {
    if (errors.errors) {
      state.errors = errors.errors;
    } else {
      state.errors = errors;
    }
  },
};

export default {
  state: store,
  getters,
  actions,
  mutations,
};
