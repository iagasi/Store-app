"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const typeorm_1 = require("typeorm");
const basket_device_1 = require("./basket_device");
const device_info_1 = require("./device_info");
const raiting_1 = require("./raiting");
let Device = class Device extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Device.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], Device.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Device.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Device.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Device.prototype, "typeId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Device.prototype, "brandId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => raiting_1.Raiting, raiting => raiting.device),
    __metadata("design:type", Array)
], Device.prototype, "raitings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => basket_device_1.Basket_Device, basketDevice => basketDevice.devices),
    __metadata("design:type", Array)
], Device.prototype, "basketDevice", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => device_info_1.Device_Info, deviceInfo => deviceInfo.devices),
    __metadata("design:type", Array)
], Device.prototype, "deviceInfo", void 0);
Device = __decorate([
    (0, typeorm_1.Entity)()
], Device);
exports.Device = Device;
//# sourceMappingURL=device.js.map