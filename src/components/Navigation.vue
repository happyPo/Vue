<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/about">About</router-link>
    </nav>
</template>
<style>
nav{
    text-align: center;
    font-size: 15px;

}
nav a{
    color: #59ecff;
    text-decoration: none;
    display: inline-block;
    padding: 10px 15px;
    text-transform: uppercase;
    font-weight: bold;
    border: 1px solid #59ecff;
}
nav a:hover{
    background: #59ecff;
    color: #3f3f3f;
}
</style>