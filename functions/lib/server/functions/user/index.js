"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userHandler = void 0;
const zod_1 = require("zod");
const types_1 = require("../../types");
const validate_1 = require("../../types/validate");
const client_1 = require("../../config/client");
const userQuery_1 = require("../../../user/userQuery");
const error_1 = require("../../error");
const postHandler = async (req, res) => {
    try {
        (0, validate_1.validate)(req.body, types_1.createUserSchema);
        const { id, isAnonymous } = req.body;
        const data = await (0, client_1.getClient)().request(userQuery_1.CREATE_USER, {
            id,
            isAnonymous,
        });
        res.status(200).json({
            data,
            message: "ok",
        });
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            res.status(400).json(new error_1.BadRequestError().throwMessage());
            return;
        }
        res.status(500).json(new error_1.InternalServerError().throwMessage());
    }
};
const userHandler = (req, res) => {
    switch (req.method) {
        case "POST":
            return postHandler(req, res);
        default:
            return res.status(405).json(new error_1.MethodNotAllowedError().throwMessage());
    }
};
exports.userHandler = userHandler;
//# sourceMappingURL=index.js.map