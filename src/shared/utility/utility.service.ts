import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
  shareFunc(): string {
    return 'use shared module';
  }

  orderFunc(): string {
    return 'use order module';
  }

  chatFunc(): string {
    return 'use chat module';
  }

  userFunc(): string {
    return 'use user module';
  }
}
