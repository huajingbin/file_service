import { Test, TestingModule } from '@nestjs/testing';
import { CleverPassService } from './clever_pass.service';

describe('CleverPassService', () => {
  let service: CleverPassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CleverPassService],
    }).compile();

    service = module.get<CleverPassService>(CleverPassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
