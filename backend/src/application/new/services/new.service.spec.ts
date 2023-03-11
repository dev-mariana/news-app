import { New, PrismaClient } from '@prisma/client'
import { NewService } from './new.service'
import { v4 as uuid } from 'uuid'

describe('NewService tests', () => {
  const prisma = new PrismaClient()
  const newService = new NewService(prisma)

  it('Should create a new', async () => {
    const data: New = {
      id: uuid(),
      title: 'Test',
      description: 'test',
      type: 'teste',
      created_at: new Date(),
      writer: 'teste',
    }
    const result = await newService.create(data)
    expect(result).toEqual(data)
  })
})
