<template>
    <div>
        <CContainer>
            <h1>Вход</h1>
            <CForm
                    @submit.prevent="signin"
            >
                <CRow>
                    <CCol sm="4">
                        <CInput
                                label="User name"
                                placeholder="Username"
                                id="username" required autofocus
                                v-model="username"
                                type="text"
                        />
                    </CCol>
                    <CCol sm="4">
                        <CInput
                                label="Password"
                                placeholder="Password"
                                id="password" required autofocus
                                v-model="password"
                                type="text"
                        />
                    </CCol>
                    <CCol sm="4">
                        <CButton
                                text="Signup"
                                type="submit"
                        />
                    </CCol>

                <CButton
                        class="btn-success"
                        type="submit">Signup</CButton>
                </CRow>
            </CForm>
            <ul class="list-unstyled">
                <li><router-link to="/">На главную</router-link></li>
            </ul>
        </CContainer>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import { CRow, CInput, CCol, CButton, CForm } from '@coreui/vue';
    export default {
        name: "Login",
        data(){
            return {
                username : "",
                password : "",
            }
        },
        components: {
            CRow, CInput, CCol, CButton, CForm
        },
        methods: {
            ...mapActions(['signin']),
            signin: function () {
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

<style lang="scss" scoped>
</style>