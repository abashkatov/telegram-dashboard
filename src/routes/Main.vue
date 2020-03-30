<template>
    <div>
        <h1>Главная</h1>
        <ul>
            <li><router-link to="/login">Вход</router-link></li>
            <li><router-link to="/register">Регистрация</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Main",
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