import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pot } from './schemas/pot.schema';
import { createPotDto } from './create-pot.dto';
@Injectable()
export class PotsService {
  constructor(@InjectModel(Pot.name) private potModel: Model<Pot>) {}

  async create(createPotDto: createPotDto): Promise<Pot> {
    const createPot = new this.potModel(createPotDto);
    return createPot.save();
  }

  async findAll(): Promise<Pot[]> {
    return this.potModel.find().exec();
  }
}
