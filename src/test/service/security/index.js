import test from "ava";
import Security from "../../../service/security/Security.js"

test("Get empty user", t => {
    const security = new Security();
    t.truthy(security);
});