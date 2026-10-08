import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';

@Processor('emailQueue')
export class EmailConsumer extends WorkerHost {
   logger = new Logger()
  async process(job: Job, token?: string): Promise<any> {
   return this.logger.log('consuming email');
  }
}
