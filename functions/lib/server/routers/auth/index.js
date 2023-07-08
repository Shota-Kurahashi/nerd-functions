"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onDeleteHandler = void 0;
const client_1 = require("../../config/client");
const userQuery_1 = require("../../../user/userQuery");
const onDeleteHandler = async (user) => {
    const id = user.uid;
    try {
        await (0, client_1.getClient)().request(userQuery_1.DELETE_USER, {
            id,
        });
    }
    catch (err) {
        console.log(err);
    }
};
exports.onDeleteHandler = onDeleteHandler;
//# sourceMappingURL=index.js.map