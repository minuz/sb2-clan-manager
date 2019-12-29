import { Controller, Get } from '@nestjs/common';
import { ClanService } from 'src/services/clan/clan.service';
import { tap } from 'rxjs/operators';

@Controller('clan')
export class ClanController {
  constructor(private readonly clanService: ClanService) {}

  @Get()
  async getClanMembers() {
    return await this.clanService.getClanMembers();
  }
}
