"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiError extends Error {
    constructor(message, statusCode) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
    static BadRequest(message) {
        return new ApiError(message, 404);
    }
    static InternalError(message) {
        return new ApiError(message, 500);
    }
    static Forbiden(message) {
        return new ApiError(message, 403);
    }
}
exports.default = ApiError;
//# sourceMappingURL=ApiError.js.map