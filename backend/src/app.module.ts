import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ClanController } from './controllers/clan/clan.controller';
import { ClanService } from './services/clan/clan.service';
import configuration from 'config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    HttpModule,
  ],
  controllers: [ClanController],
  providers: [ClanService],
})
export class AppModule {}
