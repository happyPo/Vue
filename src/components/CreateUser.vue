<template>
    <div>
        <h2>Create new user</h2>
        <form v-on:submit="addUser">
            <div class="f-row">
                <label for="first">First name</label>
                <input id="first" type="text" placeholder="First name" v-model="newUserName.first">
            </div>
            <div class="f-row">
                <label for="last">Last name</label>
                <input id="last" type="text" placeholder="Last name" v-model="newUserName.last">
            </div>
            <div class="f-row">
                <input type="submit" value="Add">
            </div>
        </form>
        <ul>
            <li v-for="user in newUsers">
                {{user.first}} {{user.last}}
            </li>
        </ul>
    </div>
</template>
<script>
    import CreateUser from './CreateUser'

    export default{
        props:['user_data'],
        data(){
            return {
                newUsers: [],
                newUserName: {}
            }
        },
        components: {
            CreateUser
        },
        methods: {
            addUser: function (e) {
                e.preventDefault();
                this.newUsers.push({
                    first: this.newUserName.first,
                    last: this.newUserName.last,
                })
            }
        }
    }
</script>
