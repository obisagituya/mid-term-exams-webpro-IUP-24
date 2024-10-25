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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        const user = new user_entity_1.User();
        user.fullName = createUserDto.fullName;
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        const result = await this.usersRepository.save(user);
        return {
            user_id: result.id,
            full_name: result.fullName,
            email: result.email
        };
    }
    async findOne(loginUserDto) {
        const user = await this.usersRepository.findOneBy({ email: loginUserDto.email });
        if (user.id == null) {
            return {
                message: 'User not found',
            };
        }
        return {
            user_id: user.id,
            full_name: user.fullName,
            email: user.email
        };
    }
    async update(id, updateUserDto) {
        await this.usersRepository.update({ id: id }, { email: updateUserDto.email });
        return {
            message: 'success'
        };
    }
    async remove(id) {
        await this.usersRepository.delete({ id: id });
        return {
            message: 'success',
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map