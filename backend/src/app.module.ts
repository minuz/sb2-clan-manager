import {
  CacheInterceptor,
  CacheModule,
  HttpModule,
  Module,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import configuration from 'config/configuration';

import { ClanController } from './controllers/clan/clan.controller';
import { PlayersController } from './controllers/players/players.controller';
import { ClanService } from './global/services/clan/clan.service';
import { PlayersService } from './global/services/players/players.service';

@Module({
  imports: [
    CacheModule.register(),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    HttpModule,
  ],
  controllers: [ClanController, PlayersController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    ClanService,
    PlayersService,
  ],
})
export class AppModule {}
