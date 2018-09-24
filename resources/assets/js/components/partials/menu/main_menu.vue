<template>
    <div>
        <div class="img-rounded menu-wrapper">
            <ol class="myMenu no-padding">
                <li :class="(menu == 1) ? 'active' : ''">
                    <router-link :tag="(menu == 1) ? 'span' : 'a'" :to="{name: 'crawlers'}">
                        <i class="glyphicon glyphicon-home"></i> Home
                    </router-link>
                </li>
                <li :class="(menu == 2) ? 'active' : ''">
                    <router-link :tag="(menu == 2) ? 'span' : 'a'" :to="{name: 'crawlers'}">
                        <i class="glyphicon glyphicon-phone"></i> Forum
                    </router-link>
                </li>
                <li :class="(menu == 3) ? 'active' : ''">
                    <router-link :tag="(menu == 3) ? 'span' : 'a'" :to="{name: 'crawlers'}">
                        <i class="glyphicon glyphicon-folder-open"></i> Deck
                    </router-link>
                </li>
                <li :class="(menu == 4) ? 'active' : ''">
                    <router-link :tag="(menu == 4) ? 'span' : 'a'" :to="{name: 'crawlers'}">
                        <i class="glyphicon glyphicon-user"></i> About Us
                    </router-link>
                </li>
                <li :class="(menu == 5) ? 'active' : ''">
                    <router-link :tag="(menu == 5) ? 'span' : 'a'" :to="{name: 'crawlers'}">
                        <i class="glyphicon glyphicon-envelope"></i>Contact Us
                    </router-link>
                </li>
                <li :class="(menu == 6) ? 'active' : ''">
                    <router-link :tag="(menu == 6) ? 'span' : 'a'" :to="{name: 'crawlers'}">
                        <i class="glyphicon glyphicon-file"></i>Privacy
                    </router-link>
                </li>
                <li :class="(menu == 7) ? 'active' : ''">
                    <router-link :tag="(menu == 7) ? 'span' : 'a'" :to="{name: 'crawlers'}">
                        <i class="glyphicon glyphicon-search"></i>MOSearch
                    </router-link>
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