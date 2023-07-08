"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClaimsSchema = exports.createUserSchema = exports.getUserSchema = void 0;
const zod_1 = require("zod");
exports.getUserSchema = zod_1.z.object({
    id: zod_1.z.string(),
});
exports.createUserSchema = zod_1.z.object({
    id: zod_1.z.string(),
    isAnonymous: zod_1.z.boolean(),
});
exports.createClaimsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    isAnonymous: zod_1.z.boolean(),
});
//# sourceMappingURL=index.js.map