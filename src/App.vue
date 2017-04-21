<template>
    <section class="wrapper">
        <header class="header">
            <Navigation/>
        </header>
        <router-view></router-view>
    </section>
</template>

<script>

    import Navigation from './components/Navigation.vue'


    export default {
        components: {

            Navigation
        }
    }


</script>
<style src="./style.css"></style>


