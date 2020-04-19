import MainRoute from "./Main";
import LoginRoute from "./security/Login";
import RegisterRoute from "./security/Register";
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
];