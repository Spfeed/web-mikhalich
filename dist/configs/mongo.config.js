"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoConfig = void 0;
const getMongoConfig = async (configService) => {
    return {
        uri: getMongoString(configService),
    };
};
exports.getMongoConfig = getMongoConfig;
const getMongoString = (configService) => 'mongodb://' +
    configService.get('MONGO_LOGIN') +
    ':' +
    configService.get('MONGO_PASSWORD') +
    '@' +
    configService.get('MONGO_HOST') +
    ':' +
    configService.get('MONGO_PORT') +
    '/' +
    configService.get('MONGO_AUTHDATABASE');
//# sourceMappingURL=mongo.config.js.map