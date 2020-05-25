import { WarClan } from './warClan';

export interface ClanWar {
  clan?: WarClan;
  teamSize?: number;
  opponent?: WarClan;
  startTime?: string;
  state?: string;
  endTime?: string;
  preparationStartTime?: string;
}
