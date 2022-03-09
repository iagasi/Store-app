"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const user_1 = require("../entities/user");
const basket_1 = require("../entities/basket");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
class UserController {
    generateJwt(user) {
        const jwtToken = jwt.sign({ id: user.id, email: user.email, role: user.email }, "9", { expiresIn: "24h" });
        return jwtToken;
    }
    registracion(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, } = req.body;
            if (!email || !password) {
                reply.send("noemailorpassword");
            }
            const candidate = yield user_1.User.findOne({ where: { email } });
            if (candidate) {
                reply.code(400).send("this user already exist");
            }
            else {
                const hashPassword = yield bcrypt_1.default.hash(password, 10);
                const basket = yield basket_1.Basket.create().save();
                const user = yield user_1.User.create({ email: email, password: hashPassword, basket: basket }).save();
                const jwtToken = this.generateJwt(user);
                return reply.send(jwtToken);
            }
        });
    }
    login(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const user = yield user_1.User.findOne({ email: email });
            if (!user) {
                return reply.send("user with this email or password not found");
            }
            let comparePassword = bcrypt_1.default.compareSync(password, user.password);
            if (!comparePassword) {
                return reply.send("Password not walid");
            }
            const jwtToken = this.generateJwt(user);
            return reply.send(jwtToken);
        });
    }
    check(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            reply.code(200).send();
        });
    }
    getAll(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_1.User.find({ relations: ["basket"] });
            reply.send(users);
        });
    }
    delete(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log("eeeeeeeeeeeeeeeeeeeee");
            try {
                const user = yield user_1.User.findOneOrFail(id);
                yield user_1.User.delete(id);
                reply.send();
            }
            catch (error) {
                reply.code(404).send("Not found such user");
            }
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map