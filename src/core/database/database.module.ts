import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigModule, databaseConfiguration } from './config';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [databaseConfiguration],
        }),
        DatabaseConfigModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: configService.get<'postgres'>('database.type'),
                host: configService.get<string>('database.host'),
                port: configService.get<number>('database.port'),
                database: configService.get<string>('database.database'),
                username: configService.get<string>('database.username'),
                password: configService.get<string>('database.password'),
                autoLoadEntities: configService.get<boolean>('database.autoLoadEntities'),
                synchronize: configService.get<boolean>('database.synchronize'),
            }),
        }),
    ],
})
export class DatabaseModule {}
 