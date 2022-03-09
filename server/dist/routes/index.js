"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const brandRouter_1 = require("./brandRouter");
const deviceRouter_1 = require("./deviceRouter");
const imageRouter_1 = require("./imageRouter");
const typeRouter_1 = require("./typeRouter");
const userRouter_1 = require("./userRouter");
const registerRoutes = (fastify) => {
    fastify.register(userRouter_1.userRouter, { prefix: "/user" });
    fastify.register(deviceRouter_1.deviceRouter, { prefix: "/device" });
    fastify.register(typeRouter_1.TypeRouter, { prefix: "/type" });
    fastify.register(brandRouter_1.brandRouter, { prefix: "/brand" });
    fastify.register(imageRouter_1.imageRouter, { prefix: "/image" });
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=index.js.map