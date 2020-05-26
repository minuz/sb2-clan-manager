import { Controller, Get, Query } from '@nestjs/common';
import { ClanService } from '../../services/clan/clan.service';

@Controller('clan')
export class ClanController {
  constructor(private readonly clanService: ClanService) {}

  @Get()
  async getClanMembers(@Query() sort) {
    return await this.clanService.getClanMembers(sort.active, sort.direction);
  }

  @Get('list')
  async getPlayersList() {
    return await this.clanService.getPlayersList();
  }
}
