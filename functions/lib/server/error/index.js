"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.MethodNotAllowedError = exports.NotFoundError = exports.ForbiddenError = exports.UnauthorizedError = exports.BadRequestError = exports.GraphQLError = exports.HttpError = exports.errors = void 0;
/* eslint-disable max-classes-per-file */
exports.errors = {
    200: { message: "GraphQL Error" },
    400: { message: "Bad Request" },
    401: { message: "Unauthorized" },
    403: { message: "Forbidden" },
    404: { message: "Not Found" },
    405: { message: "Method Not Allowed" },
    500: { message: "Internal Server Error" },
};
class HttpError extends Error {
    constructor(status) {
        super();
        this.status = status;
        this.message = exports.errors[status].message;
        this.status = status;
    }
    throwMessage() {
        return { message: this.message, status: this.status };
    }
}
exports.HttpError = HttpError;
class GraphQLError extends HttpError {
    constructor() {
        super(200);
    }
}
exports.GraphQLError = GraphQLError;
class BadRequestError extends HttpError {
    constructor() {
        super(400);
    }
}
exports.BadRequestError = BadRequestError;
class UnauthorizedError extends HttpError {
    constructor() {
        super(401);
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends HttpError {
    constructor() {
        super(403);
    }
}
exports.ForbiddenError = ForbiddenError;
class NotFoundError extends HttpError {
    constructor() {
        super(404);
    }
}
exports.NotFoundError = NotFoundError;
class MethodNotAllowedError extends HttpError {
    constructor() {
        super(405);
    }
}
exports.MethodNotAllowedError = MethodNotAllowedError;
class InternalServerError extends HttpError {
    constructor() {
        super(500);
    }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=index.js.map