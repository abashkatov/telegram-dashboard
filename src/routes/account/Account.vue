<template>
    <div>
        <CContainer>
            <h1>Account</h1>
            <p>Ваше имя: {{getUser.userName}}</p>
            <p>Ваш email: {{getUser.email}}</p>
            <ul class="list-unstyled">
                <li><router-link to="/">На главную</router-link></li>
            </ul>
        </CContainer>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "Register",
        computed: {
            ...mapGetters(['getUser']),
        },
    }
</script>

<style scoped>

</style>