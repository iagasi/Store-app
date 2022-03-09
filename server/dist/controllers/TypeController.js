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
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../entities/type");
class TypeController {
    create(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            if (!name) {
                return reply.send("name not provided");
            }
            const checkExistence = yield type_1.Type.findOne({ name: name });
            if (checkExistence) {
                return reply.code(400).send("This type already exists in database");
            }
            const type = type_1.Type.create({ name });
            yield type.save();
            reply.send(type);
        });
    }
    getAll(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const types = yield type_1.Type.find();
            reply.send(types);
        });
    }
    delete(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const types = yield type_1.Type.findOneOrFail(id);
                yield type_1.Type.delete(id);
                reply.send(types);
            }
            catch (error) {
                reply.code(404).send("Not found type");
            }
        });
    }
}
exports.default = new TypeController();
//# sourceMappingURL=TypeController.js.map