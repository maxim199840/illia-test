<template>
  <div id="app">
    <div id="nav">
      <a-button @click="$router.push('user')">Add</a-button>
      <a-table bordered :dataSource="users" :columns="columns" rowKey="id">
        <template slot="operation" slot-scope="text, record">
          <a-button @click="$router.push({ name: 'user', params: {user: record.id} })">Edit</a-button>
          <a-button type="danger" @click="$store.commit('REMOVE_USER', record.id)">Delete</a-button>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue';
  import { CREATE_USER, UPDATE_USER } from '../store/user/mutations.type';
  import { mapGetters } from 'vuex';

  export default Vue.extend({
    name: 'AppUsers',
    computed: { ...mapGetters(['users']) },
    data() {
      return {
        columns: [
          {
            title: 'Name',
            dataIndex: 'name',
            width: '30%',
            scopedSlots: { customRender: 'name' },
          }, {
            title: 'Surname',
            dataIndex: 'surname',
          }, {
            title: 'Email',
            dataIndex: 'email',
          }, {
            title: 'Phone',
            dataIndex: 'phone',
          }, {
            title: 'Operation',
            dataIndex: 'operation',
            scopedSlots: { customRender: 'operation' },
          }],
      };
    },
  });

</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
