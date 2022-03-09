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
exports.fastify = void 0;
const fastify_1 = __importDefault(require("fastify"));
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const user_1 = require("./entities/user");
const basket_1 = require("./entities/basket");
const fastify_static_1 = __importDefault(require("fastify-static"));
const routes_1 = require("./routes");
const ErrorHandling_1 = require("./middleware/ErrorHandling");
const posix_1 = __importDefault(require("path/posix"));
const bcrypt_1 = __importDefault(require("bcrypt"));
dotenv_1.default.config();
const Port = process.env.PORT || 5001;
exports.fastify = (0, fastify_1.default)({ logger: true });
exports.fastify.register(require("./middleware/newAuthMiddlevare"));
exports.fastify.register(require("fastify-cors"));
exports.fastify.register(require('fastify-multipart'), { attachFieldsToBody: true });
(0, ErrorHandling_1.CustomErrorHandler)(exports.fastify);
(0, routes_1.registerRoutes)(exports.fastify);
exports.fastify.register(require("fastify-jwt"), { secret: "9" });
exports.fastify.register(fastify_static_1.default, {
    root: posix_1.default.join(__dirname, 'public'),
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, typeorm_1.createConnection)();
        yield connection.runMigrations().then(() => { console.log("Connected To db"); });
        exports.fastify.listen(Port, "0.0.0.0", (error, adress) => __awaiter(void 0, void 0, void 0, function* () {
            if (error) {
                console.log("Error with database connection ");
                console.log(error);
            }
            else {
                console.log("Server started on adress " + adress);
            }
            const user = yield user_1.User.findOne({ email: "admin" });
            if (!user) {
                const basket = yield basket_1.Basket.create().save();
                const hashPassword = yield bcrypt_1.default.hash("admin", 10);
                yield user_1.User.create({ email: "admin", password: hashPassword, basket: basket, role: "ADMIN" }).save();
                const userPassword = yield bcrypt_1.default.hash("user", 10);
                const userbasket = yield basket_1.Basket.create().save();
                yield user_1.User.create({ email: "user", password: userPassword, basket: userbasket }).save();
            }
        }));
    }
    catch (error) {
        console.log("IN CATCH BLOCK");
    }
});
start();
//# sourceMappingURL=index.js.map