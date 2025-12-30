import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { EntitiesModule } from './entities/entities.module';

@Module({
  imports: [
    DatabaseModule,
    EntitiesModule,

  ],
  exports: [
    DatabaseModule,
    EntitiesModule,
  ]
})
export class CoreModule {}
