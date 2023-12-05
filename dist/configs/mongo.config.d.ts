import { TypegooseModuleOptions } from "@m8a/nestjs-typegoose";
import { ConfigService } from "@nestjs/config";
export declare const getMongoConfig: (configService: ConfigService) => Promise<TypegooseModuleOptions>;
