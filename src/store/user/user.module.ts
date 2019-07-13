import { CREATE_USER, REMOVE_USER, UPDATE_USER, IMPORT_USERS } from './mutations.type';
import uuid from 'uuid/v1';

interface State {
  users: any[];
}

const store: State = {
  users: [],
};

const getters = {
  users(state: State) {
    return state.users;
  },
};

const actions = {};

const mutations = {
  [CREATE_USER](state: State, user: any) {
    state.users = [...state.users, { ...user, id: uuid() }];
  },
  [UPDATE_USER](state: State, user: any) {
    const userIndex = state.users.findIndex(({ id }) => id === user.id);
    state.users = [
      ...state.users.slice(0, userIndex),
      user,
      ...state.users.slice(userIndex + 1, state.users.length)];
  },
  [REMOVE_USER](state: State, userId: any) {
    state.users = state.users.filter(({ id }) => id !== userId);
  },
  [IMPORT_USERS](state: State, usersJson: string) {
    const importedUsers = JSON.parse(usersJson);
    if (Array.isArray(importedUsers)) {
      state.users = [...state.users, ...importedUsers.map((user) => ({ ...user, id: uuid() }))];
    } else {
      state.users = [...state.users, { ...importedUsers, id: uuid() }];
    }
  },
};

export default {
  state: store,
  getters,
  actions,
  mutations,
};
