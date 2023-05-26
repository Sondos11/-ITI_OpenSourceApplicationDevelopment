<template>
  <div>
    <h1>userdetailsApp</h1>
    <form @submit.prevent="createuser">
  <!-- <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">ID</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div> -->
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">First Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="first_name">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="last_name">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Gender</label>
    <input type="text" class="form-control" id="exampleInputPassword1"  v-model="gender">
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "createusersApp",
  data(){
    return{
        id:'',
        first_name:'',
        last_name:'',
        gender:''
    }
  },
  
  methods:{
    createuser(){
      this.id = this.$route.params.id;
      console.log(this.id)
      axios.post(` http://localhost:2000/users`,{first_name: this.first_name,last_name: this.last_name,gender: this.gender})
      .then((res)=>{
        console.log(res.data)
        this.id = res.data.id
        this.first_name = res.data.first_name
        this.last_name = res.data.last_name
        this.gender = res.data.gender
        this.back()
      })
      .catch((err)=>console.log(err))
    },
    back(){
        this.$router.push('/users')
    }
  }
};
</script>

<style scoped></style>
