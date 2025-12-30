import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfiguration from './database.configuration';

@Module({
    imports: [
        ConfigModule.forFeature(databaseConfiguration),
    ],
    exports: [ConfigModule],
})
export class DatabaseConfigModule {}
