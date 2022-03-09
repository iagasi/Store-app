"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowedAndpoints = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const allowedAndpoints = (fastify) => {
    fastify.addHook('onRequest', (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const { body, url, query } = req;
        const token = req.headers.authorization;
        console.log(token);
        let verified;
        if (!token) {
            console.log("to token present unauthorized");
            return false;
        }
        if (token) {
            const PlainToken = token.split(" ")[1];
            try {
                verified = jsonwebtoken_1.default.verify(PlainToken, "9");
            }
            catch (e) {
                verified = false;
                console.log("auth hook token not verified");
            }
        }
        if (!verified) {
            return;
        }
        req.logged = true;
    }));
};
exports.allowedAndpoints = allowedAndpoints;
//# sourceMappingURL=auth.hook.js.map