<template>
  <div>
    <h1>userdetailsApp</h1>
    <form @submit.prevent="updateUser">
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">First Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="user.first_name">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="user.last_name">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Gender</label>
    <input type="text" class="form-control" id="exampleInputPassword1"  v-model="user.gender">
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
   name: "updateusersApp",  
  data() {
    return {
      user: {},
      errors: [],
      id:''
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
     this.id = this.$route.params.id;
     console.log(this.id)
      axios.get(` http://localhost:2000/users/${this.id}`)
        .then(response => {
          this.user = response.data;
          console.log(this.user)
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateUser() {
      axios.put(` http://localhost:2000/users/${this.id}`, this.user)
        .then(response => {
          console.log(response.data);
          this.back()
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    back(){
        this.$router.push('/users')
    }
  },
};
</script>

<style scoped></style>