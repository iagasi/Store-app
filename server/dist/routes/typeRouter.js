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
exports.TypeRouter = void 0;
const TypeController_1 = __importDefault(require("../controllers/TypeController"));
const TypeRouter = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.post("/create", (req, reply) => { TypeController_1.default.create(req, reply); });
    fastify.get("/", (req, reply) => { TypeController_1.default.getAll(req, reply); });
    fastify.delete("/:id", (req, reply) => { TypeController_1.default.delete(req, reply); });
});
exports.TypeRouter = TypeRouter;
//# sourceMappingURL=typeRouter.js.map