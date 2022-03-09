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
exports.Basket_Device = void 0;
const typeorm_1 = require("typeorm");
const basket_1 = require("./basket");
const device_1 = require("./device");
let Basket_Device = class Basket_Device extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], Basket_Device.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => basket_1.Basket, basket => basket.basket_device),
    __metadata("design:type", basket_1.Basket)
], Basket_Device.prototype, "basket", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => device_1.Device, device => device.basketDevice),
    __metadata("design:type", Array)
], Basket_Device.prototype, "devices", void 0);
Basket_Device = __decorate([
    (0, typeorm_1.Entity)()
], Basket_Device);
exports.Basket_Device = Basket_Device;
//# sourceMappingURL=basket_device.js.map