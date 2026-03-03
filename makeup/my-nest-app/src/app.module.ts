import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MakeupModule } from './makeup/makeup.module';

@Module({
  imports: [MakeupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
