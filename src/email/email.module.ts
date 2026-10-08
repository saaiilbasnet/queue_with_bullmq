import { Module } from '@nestjs/common';
import { EmailController } from './email.controller.js';
import { BullModule } from '@nestjs/bullmq';
import { EmailConsumer } from './email.processor.js';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'emailQueue',
    }),
  ],
  controllers: [EmailController],
  providers: [EmailConsumer],
})
export class EmailModule {}
