import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface PlayerTag extends InMemoryDBEntity {
  tag: string;
}
