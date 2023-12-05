"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHelperService = void 0;
const common_1 = require("@nestjs/common");
let DateHelperService = class DateHelperService {
    constructor() {
        this.currentDate = () => {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
            const day = ('0' + currentDate.getDate()).slice(-2);
            const formattedDate = year + '-' + month + '-' + day;
            return formattedDate;
        };
        this.previousDate = () => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() - 1);
            const year = currentDate.getFullYear();
            const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
            const day = ('0' + currentDate.getDate()).slice(-2);
            const formattedDate = year + '-' + month + '-' + day;
            return formattedDate;
        };
    }
};
exports.DateHelperService = DateHelperService;
exports.DateHelperService = DateHelperService = __decorate([
    (0, common_1.Injectable)()
], DateHelperService);
//# sourceMappingURL=datehelper.service.js.map