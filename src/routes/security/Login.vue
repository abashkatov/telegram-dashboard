<template>
    <div>
        <CContainer>
            <h1>Вход</h1>
            <CForm
                    @submit.prevent="submitForm"
            >
                <CRow>
                    <CCol sm="6" class="offset-sm-3">
                        <CInput
                                label="User name"
                                placeholder="Username"
                                id="username" required autofocus
                                v-model="username"
                                type="text"
                        />
                    </CCol>
                </CRow><CRow>
                    <CCol sm="6" class="offset-sm-3">
                        <CInput
                                label="Password"
                                placeholder="Password"
                                id="password" required autofocus
                                v-model="password"
                                type="password"
                        />
                    </CCol>
                </CRow><CRow>
                    <CCol sm="6" class="offset-sm-3">
                        <CButton
                                class="btn-primary"
                                type="submit"
                        >Signin</CButton>
                    </CCol>
                </CRow>
            </CForm>
            <ul class="list-unstyled">
                <li><router-link to="/">На главную</router-link></li>
            </ul>
        </CContainer>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import { CRow, CInput, CCol, CButton, CForm } from '@coreui/vue';
    export default {
        name: "Login",
        data(){
            return {
                username : "",
                password : "",
            }
        },
        computed: {
            ...mapGetters(['getUser']),
        },
        components: {
            CRow, CInput, CCol, CButton, CForm
        },
        methods: {
            ...mapActions(['signin']),
            submitForm: function () {
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