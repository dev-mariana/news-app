import { Test, TestingModule } from '@nestjs/testing';
import { JournalistsController } from './journalists.controller';
import { JournalistsService } from '../services/journalists.service';

describe('JournalistController', () => {
  let controller: JournalistsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JournalistsController],
      providers: [JournalistsService],
    }).compile();

    controller = module.get<JournalistsController>(JournalistsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
