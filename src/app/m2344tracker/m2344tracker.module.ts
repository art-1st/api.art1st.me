import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { M2344TrackerController } from './m2344tracker.controller';
import { M2344TrackerProcessor } from './m2344tracker.processor';

@Module({
  imports: [
    DatabaseModule,
    BullModule.registerQueue({
      name: 'm2344tracker',
    }),
  ],
  controllers: [M2344TrackerController],
  providers: [M2344TrackerProcessor],
})
export class M2344TrackerModule {}
