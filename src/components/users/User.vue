<template>
    <li>
        <router-link :to="{name: 'user', params:{ id : user_data.user_index }}">
            <img :src="user_data.user.picture.large" alt="">
        </router-link>
        <h2><span>{{user_data.user.name.title}}.</span> {{user_data.user.name.first}} {{user_data.user.name.last}}</h2>
        <p>
            <router-link class="btn" :to="{name: 'user', params:{ id : user_data.user_index }}">More</router-link>
        </p>
    </li>
</template>
<script>
    export default{
        props: ['user_data']
    }
</script>