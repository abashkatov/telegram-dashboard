<template>
    <CSidebar>
        <CSidebarNav>
            <CSidebarNavTitle>Menu</CSidebarNavTitle>
            <CSidebarNavItem>
                <CLink class="c-sidebar-nav-link" a="#">Bots</CLink>
                <router-link
                        class="c-sidebar-nav-link"
                        to="/login">Logout</router-link>
            </CSidebarNavItem>
        </CSidebarNav>
    </CSidebar>
</template>

<script>
    import {CSidebar, CSidebarNav, CSidebarNavTitle, CSidebarNavItem, CLink} from '@coreui/vue';
    export default {
        name: "Sidebar",
        components: {
            CSidebar, CSidebarNav, CSidebarNavTitle, CSidebarNavItem, CLink
        }
    }
</script>

<style scoped>

</style>