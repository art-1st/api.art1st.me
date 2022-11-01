import { InjectQueue } from '@nestjs/bull';
import { Controller, Get, Inject, Logger, Res, Version } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { Queue } from 'bull';
import { Response } from 'express';
import { Db } from 'mongodb';

@Controller('m2344tracker')
export class M2344TrackerController {
  private readonly logger = new Logger(M2344TrackerController.name);

  constructor(
    @InjectQueue('m2344tracker') private readonly trackerQueue: Queue,
    @Inject('DATABASE_CONNECTION') private db: Db,
    private schedulerRegistry: SchedulerRegistry,
  ) {}

  @Version('1')
  @Get('/hello')
  async getHello(
    @Res()
    res: Response<any>,
  ) {
    res.status(200).json({ message: 'Hi' });
  }
}
