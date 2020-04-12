<template>
    <CHeader class="navbar navbar-light">
        <CToggler :in-header=true></CToggler>
        <CHeaderNav>
            <CHeaderNavItem>
                <BAvatar>
                    <img :src="getAvatar"/>
                </BAvatar>
            </CHeaderNavItem>
        </CHeaderNav>
    </CHeader>
</template>

<script>
    import {CHeader, CToggler, CHeaderNav, CHeaderNavItem} from '@coreui/vue';
    import {BAvatar} from 'bootstrap-vue';
    import {mapGetters} from 'vuex';
    import md5 from "js-md5";
    export default {
        name: "Header",
        comments: {
            CHeader, CToggler, CHeaderNav, CHeaderNavItem, BAvatar
        },
        computed: {
            ...mapGetters(['getUser', 'getUserEmail']),
            getAvatar: function () {
                return 'https://www.gravatar.com/avatar/' + md5(this.getUserEmail.toLowerCase().trim()) + '?s=36'
            }
        },
    }
</script>

<style scoped>

</style>