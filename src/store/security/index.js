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
                    user: response.data
                });
            })
            .catch(err => {
                console.log(err);
                localStorage.removeItem('user');
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
                    user: response.data
                });
            })
            .catch(err => {
                console.log(err);
                localStorage.removeItem('user');
            });
        },
        logout(context) {
            context.commit('logout');
        }
    },
    mutations: {
        signin(state, {user}) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
            Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
        },
        logout: function (state) {
            state.user = null;
            localStorage.removeItem('user');
            delete Vue.prototype.$http.defaults.headers.common['Authorization'];
        }
    },
    state: {
        user : JSON.parse(localStorage.getItem('user') || '{}'),
    },
    getters: {
        getToken(state) {
            return state.user.token || '';
        },
        getUser(state) {
            return state.user;
        },
        isLoggedIn: state => !!state.user.token,
    },
}