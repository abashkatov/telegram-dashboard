<template>
    <div><!--        <MainHeader></MainHeader>-->
        <BContainer class="d-flex justify-content-center min-vh-100" align-h="center" align-v="center" fluid>
            <BRow align-h="center" class="flex-row" align-v="center">
                <BCol col>

                    <CCardGroup>
                        <CCard>
                            <CCardBody>
                                <h1>TB2ls</h1>

                                <p>Telegram bot tools</p>
                            </CCardBody>
                        </CCard>
                        <CCard>
                            <CCardBody>
                                <ul class="list-unstyled">
                                    <li v-if="!isLoggedIn"><router-link
                                            class="btn active mt-3 btn-primary"
                                            to="/login">Sign in</router-link></li>
                                    <li v-if="!isLoggedIn"><router-link
                                            class="btn active mt-3 btn-primary"
                                            to="/register">Sign up</router-link></li>
                                    <li v-if="isLoggedIn"><router-link to="/account">Аккаунт</router-link></li>

                                </ul>
                            </CCardBody>
                        </CCard>
                    </CCardGroup>
                </BCol>
            </BRow>
        </BContainer>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {
        CCardGroup, CCard, CCardBody,
    } from "@coreui/vue"
    import {BRow, BCol, BContainer} from "bootstrap-vue";
    export default {
        name: "Main",
        components: {
            CCardGroup, CCard, CCardBody,
            BRow, BCol, BContainer,
        },
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

<style lang="scss" scoped>
</style>