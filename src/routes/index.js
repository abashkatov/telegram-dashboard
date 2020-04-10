import MainRoute from './Main.vue';
import LoginRoute from './security/Login.vue';
import RegisterRoute from './security/Register.vue';
import AccountRoute from "./account/Account";

export default [
    {
        path: '/',
        component: MainRoute
    },
    {
        path: '/login',
        component: LoginRoute
    },
    {
        path: '/register',
        component: RegisterRoute
    },
    {
        path: '/account',
        component: AccountRoute,
        meta: {
            requiresAuth: true
        },
    },
]