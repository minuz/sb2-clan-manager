import { Controller, Get, Param } from '@nestjs/common';
import { PlayersService } from '../../services/players/players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get(':tag')
  async getPlayer(@Param('tag') tag: string) {
    return await this.playersService.getPlayer(tag);
  }
}
