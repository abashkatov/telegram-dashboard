import Vue from 'vue'
import Security from "../../service/security/Security.js"


export function createSecurity() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const options = {
        client: Vue.prototype.$http,
        apiBaseUri: process.env.VUE_APP_API_URI,
    };
    if(user.token) {
        options.token = user.token;
    }
    if(user.refreshToken) {
        options.refreshToken = user.refreshToken;
    }

    const security = new Security(options);

    return {
        actions: {
            async signup(context, data) {
                security.register(data)
                    .then(user => {
                        context.commit('signin', {user});
                    })
                    .catch(err => {
                        console.log(err);
                        localStorage.removeItem('user');
                    });
            },
            async signin(context, data) {
                security.login(data)
                    .then(user => {
                        context.commit('signin', {user});
                    })
                    .catch(err => {
                        console.log(err);
                        localStorage.removeItem('user');
                    });
            },
            logout(context) {
                security.logout();
                context.commit('logout');
            }
        },
        mutations: {
            signin(state, {user}) {
                state.user = user;
                localStorage.setItem('user', JSON.stringify(user));
            },
            logout: function (state) {
                state.user = null;
            }
        },
        state: () => ({
            user : user,
        }),
        getters: {
            getToken(state) {
                return state.user.token || '';
            },
            getUser(state) {
                return state.user;
            },
            getUserEmail(state) {
                return state.user.email;
            },
            isLoggedIn: state => !!state.user.token,
        },
    }
}