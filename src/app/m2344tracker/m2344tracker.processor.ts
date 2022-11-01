import { Process, Processor } from '@nestjs/bull';
import { Inject, Logger } from '@nestjs/common';
import { Job } from 'bull';
import { Db } from 'mongodb';

@Processor('m2344tracker')
export class M2344TrackerProcessor {
  private readonly logger = new Logger(M2344TrackerProcessor.name);

  constructor(@Inject('DATABASE_CONNECTION') private db: Db) {}

  @Process('start')
  async handleStart(bullJob: Job) {
    //
  }
}
