import { Test, TestingModule } from '@nestjs/testing';
import { MakeupController } from './makeup.controller';

describe('MakeupController', () => {
  let controller: MakeupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MakeupController],
    }).compile();

    controller = module.get<MakeupController>(MakeupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
