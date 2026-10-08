import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('emailQueue')
export class EmailConsumer extends WorkerHost {
  async process(job: Job, token?: string): Promise<any> {
   return console.log('consuming email');
  }
}
