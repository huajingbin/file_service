import { Test, TestingModule } from '@nestjs/testing';
import { MkdirService } from './mkdir.service';

describe('MkdirService', () => {
  let service: MkdirService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MkdirService],
    }).compile();

    service = module.get<MkdirService>(MkdirService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
