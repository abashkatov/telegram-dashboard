import MainRoute from './Routes/Main.vue';
import LoginRoute from './Routes/Security/Login.vue';
import RegisterRoute from './Routes/Security/Register.vue';

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
]