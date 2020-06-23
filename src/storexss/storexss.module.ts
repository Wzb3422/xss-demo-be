import { Module } from '@nestjs/common';
import { StorexssService } from './storexss.service';
import { StorexssController } from './storexss.controller';

@Module({
  providers: [StorexssService],
  controllers: [StorexssController]
})
export class StorexssModule {}
