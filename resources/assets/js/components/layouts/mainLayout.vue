<template>
    <div>
        <main_menu menu="1"></main_menu>
        <router-view></router-view>
    </div>
</template>

<script>
    import Main_menu from '../partials/menu/main_menu';
    export default {
        name: 'main-layout',
        components: {Main_menu},
        created() {
            console.log('Component created.')
        }
    }
</script>
