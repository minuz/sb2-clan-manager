import { Test, TestingModule } from '@nestjs/testing';
import { PlayersController } from './players.controller';

describe('Players Controller', () => {
  let controller: PlayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
    }).compile();

    controller = module.get<PlayersController>(PlayersController);
  });

  xit('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
