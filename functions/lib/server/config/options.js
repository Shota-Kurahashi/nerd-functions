"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirebaseConfig = exports.createCustomClaims = void 0;
const app_1 = require("firebase-admin/app");
const createCustomClaims = (uid, isAnonymous) => ({
    "https://hasura.io/jwt/claims": {
        "x-hasura-default-role": isAnonymous ? "anonymous" : "user",
        "x-hasura-allowed-roles": ["user", "anonymous"],
        "x-hasura-user-id": uid,
    },
});
exports.createCustomClaims = createCustomClaims;
const getFirebaseConfig = () => {
    var _a;
    return {
        credential: (0, app_1.cert)({
            projectId: process.env.PROJECT_ID,
            clientEmail: process.env.CLIENT_EMAIL,
            privateKey: (_a = process.env.PRIVATE_KEY) === null || _a === void 0 ? void 0 : _a.replace(/\\n/g, "\n"),
        }),
    };
};
exports.getFirebaseConfig = getFirebaseConfig;
//# sourceMappingURL=options.js.map