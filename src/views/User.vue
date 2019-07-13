<template>
  <div>
    <a-form @submit="handleSubmit" :form="form">
      <a-form-item>
        <a-input
          placeholder="Johns"
          v-decorator="['name', {
          rules: [
            { required: true, message: 'Please input name', },
           ]
         }
        ]"></a-input>
      </a-form-item>

      <a-form-item>
        <a-input
          placeholder="Smith"
          v-decorator="['surname', {
            rules: [
            { required: true, message: 'Please input surname', },
          ]
        }
        ]">
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input
          label="Email address"
          placeholder="john.smith@company.com"
          v-decorator="['email', {
            rules: [
              { type: 'email', message: 'The input is not valid E-mail!',},
              { required: true, message: 'Please input email address', },
            ],
          }]"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          label="Phone"
          placeholder="380509898989"
          v-decorator="['phone', {
            rules: [
              { required: true, message: 'Please input phone', },
            ],
          }]"></a-input>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">
          {{ user ? 'Save' : 'Add' }}
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { CREATE_USER, UPDATE_USER } from '../store/user/mutations.type';
  import { mapGetters } from 'vuex';

  export default Vue.extend({
    name: 'AppUser',
    computed: { ...mapGetters(['users']) },
    props: ['user'],
    data() {
      return {
        form: this.$form.createForm(this),
      };
    },
    components: {},
    mounted() {
      if (this.user) {
        const user = this.users.find(({ id }) => id === this.user);
        user && this.form.setFieldsValue({
          name: user.name,
          surname: user.surname,
          email: user.email,
          phone: user.phone,
        });
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();

        this.form.validateFieldsAndScroll((err, formFields) => {
          if (!err) {
            this.user ?
              this.$store.commit(UPDATE_USER, { ...formFields, id: this.user }) :
              this.$store.commit(CREATE_USER, formFields);
            this.$message.success('Saved!');
            this.$router.push({ name: 'users' });
          }
        });
      },
    },
  });
</script>
