import { ClanMemberList } from './clanMemberList';
import { LabelList } from './labelList';
import { Location } from './location';

export interface Clan {
  memberList?: ClanMemberList;
  isWarLogPublic?: boolean;
  warLosses?: number;
  warTies?: number;
  requiredTrophies?: number;
  tag?: string;
  clanLevel?: number;
  warWinStreak?: number;
  warWins?: number;
  clanVersusPoints?: number;
  warFrequency?: string;
  clanPoints?: number;
  labels?: LabelList;
  name?: string;
  location?: Location;
  type?: string;
  members?: number;
  description?: string;
  badgeUrls?: any;
}
