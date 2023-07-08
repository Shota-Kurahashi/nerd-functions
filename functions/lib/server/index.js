"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRequest = exports.httpsRequest = void 0;
const v1_1 = require("firebase-functions/v1");
const _cors = require("cors");
const httpsRequest = ({ next, secrets }) => {
    const cors = _cors({
        origin: process.env.ORIGIN,
    });
    return (0, v1_1.region)("us-central1")
        .runWith({
        secrets: secrets !== null && secrets !== void 0 ? secrets : [],
    })
        .https.onRequest((req, res) => {
        cors(req, res, () => next(req, res));
    });
};
exports.httpsRequest = httpsRequest;
const authRequest = ({ next, secrets, trigger }) => {
    if (trigger === "onCreate") {
        return (0, v1_1.region)("us-central1")
            .runWith({
            secrets: secrets !== null && secrets !== void 0 ? secrets : [],
        })
            .auth.user()
            .onCreate((user) => {
            next(user);
        });
    }
    return (0, v1_1.region)("us-central1")
        .runWith({
        secrets: secrets !== null && secrets !== void 0 ? secrets : [],
    })
        .auth.user()
        .onDelete((user) => {
        next(user);
    });
};
exports.authRequest = authRequest;
//# sourceMappingURL=index.js.map