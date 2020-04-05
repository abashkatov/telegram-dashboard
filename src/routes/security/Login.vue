<template>
    <div>
        <h1>Вход</h1>
        <form class="login" @submit.prevent="register">
            <label for="username">User name</label>
            <input id="username" required autofocus v-model="username" type="text" placeholder="Username"/>
            <label for="password">Password</label>
            <input id="password" required v-model="password" type="password" placeholder="Password"/>
            <hr/>
            <button type="submit">Signup</button>
        </form>
        <ul>
            <li><router-link to="/">На главную</router-link></li>
        </ul>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "Login",
        data(){
            return {
                username : "",
                password : "",
            }
        },
        methods: {
            ...mapActions(['signin']),
            register: function () {
                let data = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    passwordConfirm: this.passwordConfirm
                };
                this.$store.dispatch('signin', data)
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }
        }
    }
</script>

<style scoped>

</style>