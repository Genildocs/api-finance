import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_URI } from './variable-db/variable';
import { PotsModule } from './pots/pots.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(MONGODB_URI), PotsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
