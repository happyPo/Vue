<template>
    <section class="section-inner">
        <div class="frame">
            <h1 class="-centered">Users</h1>
            <UsersFilter/>
            <UsersList/>
        </div>
    </section>
</template>
<script>
    import UsersFilter from '../filter/UsersFilter'
    import UsersList from './UsersList'

    export default {
        props: ['filter'],
        components: {
            UsersFilter,
            UsersList
        }
    }

</script>