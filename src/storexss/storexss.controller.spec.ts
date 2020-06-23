import { Test, TestingModule } from '@nestjs/testing';
import { StorexssController } from './storexss.controller';

describe('Storexss Controller', () => {
  let controller: StorexssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorexssController],
    }).compile();

    controller = module.get<StorexssController>(StorexssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
