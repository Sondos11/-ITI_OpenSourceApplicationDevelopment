<template >
    <div class="body">
        <form action="" @submit.prevent="handleData" class="form-card shadow-lg d-flex flex-column rounded">
            <div class="d-flex flex-row form-container">
                <label class="w-25">Name: </label>
                <input placeholder="Enter your name.." v-model.trim.lazy="formValues.name" class="form-control m-2"
                    type="text" />
            </div>
            <div class="d-flex flex-row form-container">
                <label class="w-25">Age: </label>
                <input class="form-control m-2" placeholder="Enter your age.." v-model.number.lazy="formValues.age"
                    type="text" />
            </div>
            <div class="d-flex flex-row form-container">
                <div class="custom-control custom-radio">
                    <input type="radio" v-model="userType" id="Admin" value="admin" name="radio-group"
                        class="custom-control-input" />
                    <label class="custom-control-label m-1" for="Admin">Admin</label>
                </div>
                <div class="custom-control custom-radio">
                    <input type="radio" value="user" v-model="userType" id="User" name="radio-group"
                        class="custom-control-input" />
                    <label class="m-1 custom-control-label" for="User">User</label>
                </div>
            </div>
            <button type="submit" class="btn btn-success mt-5">Submit</button>
        </form>
        <div class="form-card shadow-lg m-3 d-flex flex-column rounded">
            <userChild v-if="userType == 'user'" @delete-user="deleteUser" />
            <adminChild v-if="userType == 'admin'" @delete-admin="deleteAdmin" />
        </div>
    </div>
</template>

<script>
import userChild from "./userChild.vue";
import adminChild from "./adminChild.vue";
export default {
    name: "HomePage",
    components: {
        userChild,
        adminChild,
    },
    provide() {
        return {
            users: this.users,
            admins: this.admins,
        };
    },
    data() {
        return {
            users: [],
            admins: [],
            userType: "user",
            formValues: {
                name: "",
                age: "",
            },
        };
    },
    computed: {},
    methods: {
        handleData() {
            if (this.userType == "admin") { this.admins.push({ ...this.formValues }); console.log(this.admins) }
            if (this.userType == "user") { this.users.push({ ...this.formValues }); console.log(this.users) }
           
        },
        deleteUser(index) {
            this.users.splice(index, 1);
        },
        deleteAdmin(index) {
            this.admins.splice(index, 1);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  background-color: #e7b0d5;
  width: 100%;
  height: 100vh;
   display: flex;
   flex-direction: column;
  justify-content: center;
  align-items: center;  
}

.form-control {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 16px;
  padding: 12px 20px;
  font-size: 16px;
}

.form-group label {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-card {
  width: 40%;
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
}

.btn {
  background-color: #8f0070;
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #d89fb2;
}

@media screen and (max-width: 600px) {
  .form-card {
    width: 80%;
    padding: 20px;
  }
}
</style>