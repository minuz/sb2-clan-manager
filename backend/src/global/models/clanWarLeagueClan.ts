import { ClanWarLeagueClanMemberList } from './clanWarLeagueClanMemberList';

export interface ClanWarLeagueClan {
  tag?: string;
  clanLevel?: number;
  name?: string;
  members?: ClanWarLeagueClanMemberList;
  badgeUrls?: any;
}
