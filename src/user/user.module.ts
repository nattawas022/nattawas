import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UtilityModule } from 'src/shared/utility/utility.module';

@Module({
  controllers: [UserController],
  imports: [UtilityModule],
})
export class UserModule {}
