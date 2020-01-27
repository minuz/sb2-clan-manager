import { Controller, Get, Query } from '@nestjs/common';
import { ISort } from 'src/models/sort.model';
import { ClanService } from 'src/services/clan/clan.service';

@Controller('clan')
export class ClanController {
  constructor(private readonly clanService: ClanService) {}

  @Get()
  async getClanMembers(@Query() sort: ISort) {
    return await this.clanService.getClanMembers(sort.active, sort.direction);
  }
}
