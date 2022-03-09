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
exports.userRouter = void 0;
const userController_1 = __importDefault(require("../controllers/userController"));
const userRouter = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.post("/registracion", (req, reply) => {
        userController_1.default.registracion(req, reply), console.log(req.body);
    });
    fastify.post("/login", (req, reply) => { userController_1.default.login(req, reply); });
    fastify.post("/auth", { preValidation: [fastify.jwtAuth] }, (req, reply) => { userController_1.default.check(req, reply); });
    fastify.delete("/:id", { preValidation: [fastify.jwtAuth] }, (req, reply) => { userController_1.default.delete(req, reply); });
    fastify.get("/", { preValidation: [fastify.jwtAuth] }, (req, reply) => { userController_1.default.getAll(req, reply); });
});
exports.userRouter = userRouter;
//# sourceMappingURL=userRouter.js.map