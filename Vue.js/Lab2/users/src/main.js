import { createApp } from 'vue'
import App from './App.vue';
import { createWebHistory,createRouter } from 'vue-router';
import allusersApp from './components/allusers.vue';
import userdetailsApp from './components/userdetails.vue';
import createusersApp from './components/createuser.vue';
import updateusersApp from './components/updateuser.vue';
import errorApp from './components/error.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const routes = [
    {
        path:'/',component:allusersApp,alias:'/users',
        // children:{
        //     path:
        // }
    },
    {
        path:'/users/:id',component:userdetailsApp
    },
    {
        path:'/users/create',component:createusersApp
    },
    {
        path:'/users/update/:id',component:updateusersApp
    },
    {
        path:'/:NotFound(.*)*',component:errorApp,meta:{hideNavbar:true}
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
