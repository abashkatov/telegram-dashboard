import Vue from 'vue'

export default {
    actions: {
        async signup(context, data) {
            Vue.prototype.$http({
                url: process.env.VUE_APP_BASE_URI + '/registration',
                data: data,
                method: 'POST'
            })
            .then(response => {
                context.commit('signin', {
                    token: response.data.token,
                    user: response.data.user
                });
            })
            .catch(err => {
                console.log(err);
                localStorage.removeItem('token');
            });
        },
        async signin(context, data) {
            Vue.prototype.$http({
                url: process.env.VUE_APP_BASE_URI + '/login',
                data: data,
                method: 'POST'
            })
            .then(response => {
                context.commit('signin', {
                    token: response.data.token,
                    user: response.data.user
                });
            })
            .catch(err => {
                console.log(err);
                localStorage.removeItem('token');
            });
        },
        logout(context) {
            context.commit('logout');
        }
    },
    mutations: {
        signin(state, {token, user}) {
            state.token = token;
            state.user = user;
            localStorage.setItem('token', token);
            Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },
        logout: function (state) {
            state.token = null;
            state.user = null;
            localStorage.removeItem('token');
            Vue.prototype.$http.defaults.headers.common['Authorization'] = undefined;
        }
    },
    state: {
        token: localStorage.getItem('token') || '',
        user : {},
    },
    getters: {
        getToken(state) {
            return state.token;
        },
        getUser(state) {
            return state.user;
        },
    },
}