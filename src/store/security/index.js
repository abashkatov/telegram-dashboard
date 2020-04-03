import Vue from 'vue'

export default {
    actions: {
        async signup(context, data) {
            Vue.prototype.$http({
                url: 'http://localhost:8090/registration',
                data: data,
                method: 'POST'
            })
            .then(response => {
                context.commit('signup', {
                    token: response.data.token,
                    user: response.data.user
                });
            })
            .catch(err => {
                console.log(err);
                localStorage.removeItem('token');
            });
        }
    },
    mutations: {
        signup(state, {token, user}) {
            state.token = token;
            state.user = user;
            localStorage.setItem('token', token);
            Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
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