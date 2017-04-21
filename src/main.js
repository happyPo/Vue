// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import About from './components/About'
import Home from './components/home/Home'
import Users from './components/users/Users'
import UserDetail from './components/users/UserDetail'
import CreateUser from './components/CreateUser'

Vue.use(VueResource);
Vue.use(VueRouter);



Vue.config.productionTip = false;



const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/about', component: About},
        {path: '/', component: Home},
        {path: '/users', component: Users},
        {path: '/adduser', component: CreateUser},
        {path: '/user/:id', name:'user', component: UserDetail}
    ]
});

window.Event = new Vue();

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}

});
