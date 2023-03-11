import { New, PrismaClient } from '@prisma/client'

export class NewService {
  constructor(private readonly prisma: PrismaClient) {
    this.prisma = new PrismaClient()
  }

  async create(data: New): Promise<New> {
    return await this.prisma.new.create({
      data,
    })
  }

  async findOne(title: string): Promise<New> {
    return await this.prisma.new.findUnique({ where: { title } })
  }
}
