import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StorexssModule } from './storexss/storexss.module';

@Module({
  imports: [StorexssModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
