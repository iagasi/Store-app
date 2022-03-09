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
const brand_1 = require("../entities/brand");
class BrandController {
    create(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            const newBrand = brand_1.Brand.create({ name });
            yield newBrand.save();
            reply.send(newBrand);
        });
    }
    getAll(_, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const allBrands = yield brand_1.Brand.find();
            reply.send(allBrands);
        });
    }
    getById(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const foundBrand = yield brand_1.Brand.findOne(id);
            if (!foundBrand) {
                reply.send("not found such brand");
            }
            reply.send(foundBrand);
        });
    }
    deleteBrand(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield brand_1.Brand.findOneOrFail(id);
                yield brand_1.Brand.delete(id);
                reply.code(200).send("deleted");
            }
            catch (error) {
                reply.code(404).send("cannot delete");
            }
        });
    }
}
exports.default = new BrandController();
//# sourceMappingURL=brandController.js.map