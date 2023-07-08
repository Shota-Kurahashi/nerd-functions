"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const customClaims_1 = require("../../functions/customClaims");
const user_1 = require("../../functions/user");
const express = require("express");
const router = express.Router();
exports.router = router;
router.post("/setCustomClaims", customClaims_1.setCustomClaimsHandler);
router.post("/user", user_1.userHandler);
//# sourceMappingURL=index.js.map