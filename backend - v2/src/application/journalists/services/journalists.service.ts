import { Injectable } from '@nestjs/common';
import { CreateJournalistDTO } from '../dto/create-journalist.dto';
import { JournalistsRepository } from '../repositories/journalists.repository';
import { JournalistEntity } from '../entities/journalist.entity';

@Injectable()
export class JournalistsService {
  constructor(private readonly repository: JournalistsRepository) {}

  async create(
    createJournalist: CreateJournalistDTO,
  ): Promise<JournalistEntity> {
    return await this.repository.create(createJournalist);
  }

  async findOne(email: string): Promise<JournalistEntity> {
    return await this.repository.findOne(email);
  }
}
