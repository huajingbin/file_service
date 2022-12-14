import { Test, TestingModule } from '@nestjs/testing';
import { MkdirController } from './mkdir.controller';
import { MkdirService } from './mkdir.service';

describe('MkdirController', () => {
  let controller: MkdirController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MkdirController],
      providers: [MkdirService],
    }).compile();

    controller = module.get<MkdirController>(MkdirController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
