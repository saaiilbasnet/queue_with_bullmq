import { InjectQueue } from '@nestjs/bullmq';
import { Body, Controller, Post } from '@nestjs/common';
import { Queue } from 'bullmq';

@Controller('email')
export class EmailController {
  constructor(
    @InjectQueue('emailQueue')
    private readonly emailQueue: Queue,
  ) {}

  @Post()
  async welcomeEmail() {
    return await this.emailQueue.add('sendMail', {
      message: 'Email sending.....',
    });
  }
}
