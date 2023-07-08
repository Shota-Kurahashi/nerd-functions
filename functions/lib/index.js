"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.api = void 0;
const server_1 = require("./server");
const express_1 = require("./server/config/express");
const auth_1 = require("./server/routers/auth");
exports.api = (0, server_1.httpsRequest)({
    next: express_1.app,
    secrets: ["ADMIN_SECRET"],
});
exports.deleteUser = (0, server_1.authRequest)({
    next: auth_1.onDeleteHandler,
    secrets: ["ADMIN_SECRET"],
    trigger: "onDelete",
});
//# sourceMappingURL=index.js.map