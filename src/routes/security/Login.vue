<template>
    <div>
        <CContainer class="d-flex align-items-center min-vh-100">
            <CRow class="justify-content-center">
                <CCol class="col-md-8">
                    <CCardGroup>
                        <CCard class="p-4">
                            <CCardBody>
                                <CForm
                                        @submit.prevent="submitForm"
                                >
                                    <h1>Sign in</h1>
                                    <p class="text-muted">Sign in to your account</p>
                                    <BInputGroup class="mt-3">
                                        <BInputGroupPrepend is-text>
                                            <BIconPerson/>
                                        </BInputGroupPrepend>
                                        <BFormInput
                                                label="User name"
                                                class="form-control"
                                                placeholder="Username"
                                                id="username" required autofocus
                                                v-model="username"
                                                type="text"
                                        ></BFormInput>
                                    </BInputGroup>
                                    <BInputGroup class="mt-3">
                                        <BInputGroupPrepend is-text>
                                            <BIconLock/>
                                        </BInputGroupPrepend>
                                        <BFormInput
                                                label="Password"
                                                placeholder="Password"
                                                id="password" required autofocus
                                                v-model="password"
                                                type="password"
                                        />
                                    </BInputGroup>
                                    <BInputGroup class="mt-3">
                                        <CButton
                                                class="btn-block btn-primary"
                                                type="submit"
                                        >Sign in</CButton>
                                            Forgot password?
                                    </BInputGroup>

                                </CForm>

                            </CCardBody>

                            <CCardFooter>
                                <ul class="list-unstyled">
                                    <li><router-link to="/">Main</router-link></li>
                                </ul>
                            </CCardFooter>
                        </CCard>

                        <CCard
                                class="text-center py-5 d-md-down-none bg-primary text-white"
                                style="width: 44%;">
                            <CCardBody class="card-body">
                                <h2>Sign up</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <router-link
                                        class="btn active mt-3 btn-primary"
                                        to="/register"
                                >Register</router-link>
                            </CCardBody>
                        </CCard>
                    </CCardGroup>
                </CCol>
            </CRow>
        </CContainer>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import { CRow, CCol, CButton, CForm,
    } from '@coreui/vue';
    import {
        BInputGroup, BInputGroupPrepend, BIconPerson,
        BFormInput, BIconLock,
    } from "bootstrap-vue";
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
            CRow, CCol, CButton, CForm,
            BInputGroup, BInputGroupPrepend, BIconPerson,
            BFormInput, BIconLock,
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