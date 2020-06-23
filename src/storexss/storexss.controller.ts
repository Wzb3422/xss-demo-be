import { Controller, Post, Req, Body } from '@nestjs/common';
import { StorexssService } from './storexss.service';
import { searchDto } from './dto/searchDto';

@Controller('storexss')
export class StorexssController {
  constructor (readonly storexssService: StorexssService) {}
  @Post()
  async search(@Body() dto: searchDto) {
    return dto.isEscaped ? encodeURIComponent(dto.word) : dto.word
  }
}
