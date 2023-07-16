import { Test, TestingModule } from '@nestjs/testing';
import { JournalistsService } from './journalists.service';

describe('JournalistService', () => {
  let service: JournalistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JournalistsService],
    }).compile();

    service = module.get<JournalistsService>(JournalistsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
