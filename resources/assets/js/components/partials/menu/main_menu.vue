<template>
    <div>
        <div class="img-rounded menu-wrapper">
            <ol class="myMenu no-padding">
                <li :class="(menu == 1) ? 'active' : ''">
                    <router-link tag="a" :to="{name: 'crawlers'}" v-if="menu != 1">
                        <i class="glyphicon glyphicon-home"></i> Home
                    </router-link>
                    <i class="glyphicon glyphicon-home" v-else></i> Home
                </li>
                <li :class="(menu == 2) ? 'active' : ''">
                    <router-link tag="a" :to="{name: 'crawlers'}" v-if="menu != 2">
                        <i class="glyphicon glyphicon-phone"></i> Forum
                    </router-link>
                    <i class="glyphicon glyphicon-phone" v-else></i> Forum
                </li>
                <li :class="(menu == 3) ? 'active' : ''">
                    <router-link tag="a" :to="{name: 'crawlers'}" v-if="menu != 3">
                        <i class="glyphicon glyphicon-folder-open"></i> Deck
                    </router-link>
                    <i class="glyphicon glyphicon-folder-open" v-else></i> Deck
                </li>
                <li :class="(menu == 4) ? 'active' : ''">
                    <router-link tag="a" :to="{name: 'crawlers'}" v-if="menu != 4">
                        <i class="glyphicon glyphicon-user"></i> About Us
                    </router-link>
                    <i class="glyphicon glyphicon-user" v-else></i> About Us
                </li>
                <li :class="(menu == 5) ? 'active' : ''">
                    <router-link tag="a" :to="{name: 'crawlers'}" v-if="menu != 5">
                        <i class="glyphicon glyphicon-envelope"></i>Contact Us
                    </router-link>
                    <i class="glyphicon glyphicon-envelope" v-else></i> Contact Us
                </li>
                <li :class="(menu == 6) ? 'active' : ''">
                    <router-link tag="a" :to="{name: 'crawlers'}" v-if="menu != 6">
                        <i class="glyphicon glyphicon-file"></i>Privacy
                    </router-link>
                    <i class="glyphicon glyphicon-file" v-else></i> Privacy
                </li>
                <li :class="(menu == 7) ? 'active' : ''">
                    <router-link tag="a" :to="{name: 'crawlers'}" v-if="menu != 7">
                        <i class="glyphicon glyphicon-search"></i>MOSearch
                    </router-link>
                    <i class="glyphicon glyphicon-search" v-else></i> MOSearch
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    export default {
        name: "main_menu",
        props: ['menu']
    }
</script>

<style scoped>
    .menu-wrapper {
        border: 2px solid #204d74;
        margin-bottom: 50px;
        padding: 10px;
    }

    .myMenu {
        background-color: white;
        margin-bottom: 0px;
    }
</style>