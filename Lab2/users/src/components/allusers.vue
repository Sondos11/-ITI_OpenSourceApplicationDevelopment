<template>
  <div class="p-4">
    <table class="table table-dark mx-5">
  <thead>
    <tr>
      <th scope="col ">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Gender</th>
        <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <th scope="row">{{ user.id }}</th>
      <td>{{ user.first_name }}</td>
      <td>{{user.last_name}}</td>
      <td>{{ user.gender }}</td>
      <td>
        <button class="btn btn-sm btn-danger m-1" @click="deleteUser(user.id)">delete</button>
        <router-link :to="`/users/${user.id}`" class=" btn btn-warning m-1">see more</router-link>
        <router-link :to="`/users/update/${user.id}`" class="btn btn-primary m-1">Update</router-link>
      </td>
    </tr>
   
  </tbody>
</table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "allusersApp",
  created() {
    this.getallusers();
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getallusers() {
      axios
        .get("  http://localhost:2000/users")
        .then((res) => {
          console.log(res.data);
          this.users = res.data
        })
        .catch((err) => console.log(err));
    },
    deleteUser(id){
        axios.delete(`  http://localhost:2000/users/${id}`)
        .then((res)=>{
            console.log(res.data)
            this.getallusers()
        })
        .catch((err)=>console.log(err))
    }
  },
};
</script>

<style scoped></style>
