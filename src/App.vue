<template>
    <section class="wrapper">
        <header class="header">
            <Navigation/>
        </header>
        <router-view></router-view>
<!--        <ul class="list">
            <li v-for="user in usersArr">
                <h2>{{user.name}}</h2>
            </li>
        </ul>-->
    </section>
</template>

<script>

    import Navigation from './components/Navigation.vue'

    var usersDataLink = 'https://jsonplaceholder.typicode.com/users';

    export default {
        data(){
          return{
              usersArr:''
          }
        },
        components: {
            Navigation
        },
        mounted() {
            this.$http.get(usersDataLink).then(response => this.usersArr = response.data);

        }
    }
</script>
<style src="./style.css"></style>


