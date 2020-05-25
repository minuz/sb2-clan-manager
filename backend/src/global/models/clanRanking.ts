import { Location } from './location';

export interface ClanRanking {
  clanLevel?: number;
  clanPoints?: number;
  location?: Location;
  members?: number;
  tag?: string;
  name?: string;
  rank?: number;
  previousRank?: number;
  badgeUrls?: any;
}
