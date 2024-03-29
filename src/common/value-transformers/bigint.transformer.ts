import { ValueTransformer } from 'typeorm';

export class BigintTransformer implements ValueTransformer {
  to(entityValue: number): number {
    return entityValue;
  }

  from(databaseValue: string): number {
    return parseInt(databaseValue, 10);
  }
}
