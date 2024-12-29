import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PotsController } from './pots.controller';
import { PotsService } from './pots.service';
import { Pot, PotSchema } from './schemas/pot.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Pot.name, schema: PotSchema }])],
  controllers: [PotsController],
  providers: [PotsService],
})
export class PotsModule {}
