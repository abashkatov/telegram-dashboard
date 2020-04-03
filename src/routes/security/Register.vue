<template>
    <div>
        <h1>Регистрация</h1>
        <form class="login" @submit.prevent="register">
            <label for="username">User name</label>
            <input id="username" required autofocus v-model="username" type="text" placeholder="Username"/>
            <label for="email">Email</label>
            <input id="email" required v-model="email" type="text" placeholder="Email"/>
            <label for="password">Password</label>
            <input id="password" required v-model="password" type="password" placeholder="Password"/>
            <label for="passwordConfirm">Confirm Password</label>
            <input id="passwordConfirm" required v-model="passwordConfirm" type="password" placeholder="Confirm Password"/>
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
        name: "Register",
        data(){
            return {
                username : "",
                email : "",
                password : "",
                passwordConfirm : "",
            }
        },
        methods: {
            ...mapActions(['signup']),
            register: function () {
                let data = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    passwordConfirm: this.passwordConfirm
                };
                this.$store.dispatch('signup', data)
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }
        }
    }
</script>

<style scoped>

</style>