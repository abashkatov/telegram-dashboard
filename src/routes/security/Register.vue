<template>
    <div class="c-app flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol md="6">
                    <CCard class="mx-4">
                        <CCardBody class="p-4">
                            <h1>Sign up</h1>
                            <p class="text-muted">Create your account</p>
                            <CForm
                                    class="login"
                                    @submit.prevent="submitForm"
                            >
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
                                        <BIconEnvelopeOpen/>
                                    </BInputGroupPrepend>
                                    <BFormInput
                                            label="Email"
                                            placeholder="Email"
                                            id="email" required autofocus
                                            v-model="email"
                                            type="email"
                                    />
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
                                    <BInputGroupPrepend is-text>
                                        <BIconLock/>
                                    </BInputGroupPrepend>
                                    <BFormInput
                                            label="Confirm Password"
                                            placeholder="Confirm Password"
                                            id="passwordConfirm" required autofocus
                                            v-model="passwordConfirm"
                                            type="password"
                                    />
                                </BInputGroup>
                                <BInputGroup class="mt-3">
                                    <CButton
                                            class="btn-block btn-primary"
                                            type="submit"
                                    >Sign up</CButton>
                                </BInputGroup>
                            </CForm>

                        </CCardBody>
                        <CCardFooter class="p-4">
                            <ul class="list-unstyled">
                                <li><router-link to="/">Main</router-link></li>
                            </ul>
                        </CCardFooter>
                    </CCard>
                </CCol>

            </CRow>



         </CContainer>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import { CContainer, CRow, CCol, CCard, CCardBody, CForm, CCardFooter } from '@coreui/vue';
    import { BInputGroup,
        BInputGroupPrepend,
        BIconPerson, BIconEnvelopeOpen, BIconLock,
        BFormInput,
    } from 'bootstrap-vue';
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
        components: {
            BInputGroup,
            BInputGroupPrepend,
            BIconPerson, BIconEnvelopeOpen, BIconLock,
            BFormInput,
            CContainer, CRow, CCol, CCard, CCardBody, CForm, CCardFooter,
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