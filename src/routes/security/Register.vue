<template>
    <div>
        <CContainer>
            <h1>Регистрация</h1>
            <CForm
                    class="login"
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
                </CRow>
                <CRow>
                    <CCol sm="6" class="offset-sm-3">
                        <CInput
                                label="Email"
                                placeholder="Email"
                                id="email" required autofocus
                                v-model="email"
                                type="email"
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
                </CRow><CRow>
                    <CCol sm="6" class="offset-sm-3">
                        <CInput
                                label="Confirm Password"
                                placeholder="Confirm Password"
                                id="passwordConfirm" required autofocus
                                v-model="passwordConfirm"
                                type="password"
                        />
                    </CCol>
                </CRow><CRow>
                    <CCol sm="6" class="offset-sm-3">
                        <CButton
                                class="btn-primary"
                                type="submit"
                        >Signup</CButton>
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
            submitForm: function () {
                let data = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    passwordConfirm: this.passwordConfirm
                };
                this.signup(data)
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }
        }
    }
</script>

<style scoped>

</style>