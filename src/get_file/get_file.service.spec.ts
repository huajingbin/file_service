import { Test, TestingModule } from '@nestjs/testing';
import { GetFileService } from './get_file.service';

describe('GetFileService', () => {
  let service: GetFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetFileService],
    }).compile();

    service = module.get<GetFileService>(GetFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
