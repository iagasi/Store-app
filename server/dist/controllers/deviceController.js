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
const fs_1 = require("fs");
const posix_1 = __importDefault(require("path/posix"));
const device_1 = require("../entities/device");
const imageController_1 = __importDefault(require("./imageController"));
const pathOfPhoto = (photoName) => {
    return posix_1.default.resolve(__dirname, "..", "public", photoName);
};
class DeviceController {
    create(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const dirtiFile = yield req.body;
            const img = yield dirtiFile.img._buf;
            const photoName = Math.random().toString() + ".jpg";
            const writer = (0, fs_1.createWriteStream)(pathOfPhoto(photoName));
            writer.write(img);
            const { price, name, typeId, brandId } = req.body;
            const device = device_1.Device.create({ name: name.value, price: price.value, img: photoName, typeId: typeId.value, brandId: brandId.value });
            yield device.save();
            reply.send(device);
        });
    }
    getAll(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { brandId, typeId } = req.params;
            let devices;
            if (!brandId && !typeId) {
                devices = yield device_1.Device.find();
            }
            if (brandId && !typeId) {
                devices = yield device_1.Device.find({ brandId: brandId });
            }
            if (!brandId && typeId) {
                devices = yield device_1.Device.find(({ typeId: typeId }));
            }
            reply.send(devices);
        });
    }
    getById(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const found = yield device_1.Device.findOne(id, { relations: ["device_info"] });
            if (!found) {
                return reply.code(404).send("the device not found");
            }
            reply.send(found);
        });
    }
    getImage(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.params;
            reply.sendFile(name);
        });
    }
    delete(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const device = yield device_1.Device.findOneOrFail(id);
                imageController_1.default.deleteImage(device.img);
                yield device_1.Device.delete(id);
                reply.send();
            }
            catch (error) {
                reply.code(404).send("Not found such device");
            }
        });
    }
}
exports.default = new DeviceController();
//# sourceMappingURL=deviceController.js.map