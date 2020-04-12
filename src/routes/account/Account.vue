<template>
    <div>
        <Sidebar></Sidebar>
        <CWrapper>
            <Header></Header>
            <CContainer>
                <h1>Account</h1>
                <p>Ваше имя: {{getUser.userName}}</p>
                <p>Ваш email: {{getUser.email}}</p>
                <ul class="list-unstyled">
                    <li><router-link to="/">На главную</router-link></li>
                </ul>
            </CContainer>
            <Footer></Footer>
        </CWrapper>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Sidebar from '@/components/Sidebar.vue'
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import {CWrapper, CContainer} from '@coreui/vue';
    export default {
        name: "Register",
        computed: {
            ...mapGetters(['getUser', 'getUserEmail']),
        },
        components: {
            Sidebar, Header, CWrapper, CContainer, Footer
        },
    }
</script>

<style scoped>

</style>