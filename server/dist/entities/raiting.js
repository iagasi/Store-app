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
exports.Raiting = void 0;
const typeorm_1 = require("typeorm");
const device_1 = require("./device");
const user_1 = require("./user");
let Raiting = class Raiting extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Raiting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Raiting.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, user => user.raitings),
    __metadata("design:type", user_1.User)
], Raiting.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => device_1.Device, device => device.raitings),
    __metadata("design:type", device_1.Device)
], Raiting.prototype, "device", void 0);
Raiting = __decorate([
    (0, typeorm_1.Entity)()
], Raiting);
exports.Raiting = Raiting;
//# sourceMappingURL=raiting.js.map