<template>
    <div class="filter">
        <label for="f">Filter</label>
        <input id="f" v-model="filter" placeholder="Search user" autofocus>
        <!--<p>Фильтр: {{ filter }}</p>-->
    </div>
</template>

<script>

    export default {
        data(){
            return {
                filter: ''
            }
        },
        computed: {
            filteredUser(){
                return this.usersArr.filter((user) => {
                    return user.name.first.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase());
                });
            }
        },
        watch: {
            filter(filterData){
                Event.$emit('filterChanged', filterData);
            }
        }
    }
</script>
