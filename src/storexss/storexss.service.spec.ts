import { Test, TestingModule } from '@nestjs/testing';
import { StorexssService } from './storexss.service';

describe('StorexssService', () => {
  let service: StorexssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorexssService],
    }).compile();

    service = module.get<StorexssService>(StorexssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
