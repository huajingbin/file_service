import { Test, TestingModule } from '@nestjs/testing';
import { CleverPassController } from './clever_pass.controller';
import { CleverPassService } from './clever_pass.service';

describe('CleverPassController', () => {
  let controller: CleverPassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CleverPassController],
      providers: [CleverPassService],
    }).compile();

    controller = module.get<CleverPassController>(CleverPassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
