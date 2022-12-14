import { Test, TestingModule } from '@nestjs/testing';
import { GetFileController } from './get_file.controller';
import { GetFileService } from './get_file.service';

describe('GetFileController', () => {
  let controller: GetFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetFileController],
      providers: [GetFileService],
    }).compile();

    controller = module.get<GetFileController>(GetFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
