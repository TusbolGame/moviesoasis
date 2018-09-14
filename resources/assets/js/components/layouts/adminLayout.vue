<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'mo-layout',
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
