import { League } from './league';

export interface ClanMember {
  league?: League;
  tag?: string;
  name?: string;
  role?: string;
  expLevel?: number;
  clanRank?: number;
  previousClanRank?: number;
  donations?: number;
  donationsReceived?: number;
  trophies?: number;
  versusTrophies?: number;
}
