import test from "ava";
import Security from "../../../service/security/Security.js"
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

test.beforeEach(t => {
    const client = axios.create();
    t.context.mock = new MockAdapter(client);
    t.context.security = new Security({client});
    t.context.mock.onGet(process.env.VUE_APP_BASE_URI + '/api/user')
        .reply(200, {});
});
test("Get empty user", t => {
    const security = new Security();
    t.truthy(security);
});

test("Login", async t => {
    const LOGIN_REQUEST = {
        username: "login",
        password: "password",
    };
    const LOGIN_RESPONSE = {
        token: "TOKEN",
        refreshToken: "REFRESH_TOKEN",
    };
    t.context.mock.onPost(process.env.VUE_APP_BASE_URI + '/login', LOGIN_REQUEST)
        .reply(200, LOGIN_RESPONSE);

    await t.context.security.login(LOGIN_REQUEST);
    await t.context.security.getUser();
    await t.context.security.logout();
    await t.context.security.getUser();

    t.is(t.context.mock.history.get.length, 2);
    t.is(t.context.mock.history.get[0].headers.Authorization, `Bearer ${LOGIN_RESPONSE.token}`);
    t.falsy(t.context.mock.history.get[1].headers.Authorization);
});

test("Register", async t => {
    const REGISTER_REQUEST = {
        username: "LOGIN",
        email: "EMAIL",
        password: "PASSWORD",
        passwordConfirm: "PASSWORD_CONFIRM",
    };
    const REGISTER_RESPONSE = {
        token: "TOKEN",
        refreshToken: "REFRESH_TOKEN",
    };
    t.context.mock.onPost(process.env.VUE_APP_BASE_URI + '/registration', REGISTER_REQUEST)
        .reply(200, REGISTER_RESPONSE);
    await t.context.security.register(REGISTER_REQUEST);
    await t.context.security.getUser();
    t.is(t.context.mock.history.get.length, 1);
    t.is(t.context.mock.history.get[0].headers.Authorization, `Bearer ${REGISTER_RESPONSE.token}`);
});


