import axios from "axios";

export default class Security {
    #apiBaseUri;
    constructor(options = {}) {
        this.client = options.client || axios.create();
        this.token = options.token;
        this.refreshToken = options.refreshToken;
        this.#apiBaseUri = options.apiBaseUri;
    }

    async register({username, email, password, passwordConfirm}) {
        const {data} = await this.client.post(
            this.#apiBaseUri + '/registration',
            {username, email, password, passwordConfirm}
        );
        this.token = data.token;
        this.refreshToken = data.refreshToken;
        this.client.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;

        return data;
    }
    async login({username, password}) {
        const {data} = await this.client.post(
            this.#apiBaseUri + '/login',
            {username, password}
        );
        this.token = data.token;
        this.refreshToken = data.refreshToken;
        this.client.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;

        return data;
    }

    logout() {
        this.token = null;
        this.refreshToken = null;
        delete this.client.defaults.headers.common['Authorization'];
    }

    async getUser() {
        return await this.client.get(
            this.#apiBaseUri + '/api/user'
        );
    }
}