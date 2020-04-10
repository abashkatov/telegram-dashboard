<template>
    <div>
        <CContainer>
            <h1>TB2ls</h1>
            <ul class="list-unstyled">
                <li><router-link to="/login">Вход</router-link></li>
                <li><router-link to="/register">Регистрация</router-link></li>
                <li v-if="isLoggedIn"><router-link to="/account">Аккаунт</router-link></li>

            </ul>
        </CContainer>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Main",
        computed: {
            ...mapGetters(['getToken', 'isLoggedIn']),
        },
        data() {
            return {
            }
        },
        async mounted() {
        }
    }
</script>

<style scoped>

</style>