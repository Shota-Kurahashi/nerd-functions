"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCustomClaimsHandler = exports.postHandler = void 0;
const auth_1 = require("firebase-admin/auth");
const zod_1 = require("zod");
const options_1 = require("../../config/options");
const validate_1 = require("../../types/validate");
const types_1 = require("../../types");
const error_1 = require("../../error");
const postHandler = async (req, res) => {
    try {
        (0, validate_1.validate)(req.body, types_1.createClaimsSchema);
        const { id, isAnonymous } = req.body;
        const customClaims = (0, options_1.createCustomClaims)(id, isAnonymous);
        await (0, auth_1.getAuth)().setCustomUserClaims(id, customClaims);
        res.status(200).json({ message: "ok" });
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            res.status(400).json(new error_1.BadRequestError().throwMessage());
            return;
        }
        res.status(500).json(new error_1.InternalServerError().throwMessage());
    }
};
exports.postHandler = postHandler;
const setCustomClaimsHandler = (req, res) => {
    switch (req.method) {
        case "POST":
            return (0, exports.postHandler)(req, res);
        default:
            return res.status(405).json(new error_1.MethodNotAllowedError().throwMessage());
    }
};
exports.setCustomClaimsHandler = setCustomClaimsHandler;
//# sourceMappingURL=index.js.map