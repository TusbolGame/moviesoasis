<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'admin-layout',
        created() {
            console.log('Component created.')
        }
    }
</script>
