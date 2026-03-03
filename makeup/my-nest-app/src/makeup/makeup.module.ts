import { Module } from '@nestjs/common';
import { MakeupController } from './makeup.controller';
import { MakeupService } from './makeup.service';

@Module({
  controllers: [MakeupController],
  providers: [MakeupService]
})
export class MakeupModule {}
