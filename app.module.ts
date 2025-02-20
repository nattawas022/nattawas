import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './src/user/user.module';
import { ChatModule } from './src/chat/chat.module';
import { OrderModule } from './src/order/order.module';
import { ProductModule } from 'src/product/product.module';
import { UtilityModule } from 'src/shared/utility/utility.module';
import { GlobalHelperModule } from 'src/shared/global-helper/global-helper.module';

@Module({
  imports: [
    ProductModule,
    UtilityModule,
    UserModule,
    OrderModule,
    ChatModule,
    GlobalHelperModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
