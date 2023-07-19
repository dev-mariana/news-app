import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { CreateJournalistDTO } from '../dto/create-journalist.dto';
import { v4 as uuid } from 'uuid';
import { JournalistEntity } from '../entities/journalist.entity';
import { Prisma } from '@prisma/client';
import { encryptPassword } from '@helpers/encrypt-password';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JournalistsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(journalistDTO: CreateJournalistDTO): Promise<JournalistEntity> {
    const encryptedPassword = await encryptPassword(journalistDTO.password);
    const data: Prisma.JournalistCreateInput = {
      id: uuid(),
      name: journalistDTO.name,
      last_name: journalistDTO.last_name,
      email: journalistDTO.email,
      password: encryptedPassword,
    };

    return await this.prisma.journalist.create({ data });
  }

  async findOne(email: string): Promise<JournalistEntity> {
    return await this.prisma.journalist.findUnique({ where: { email } });
  }
}
