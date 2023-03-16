import { New, PrismaClient } from '@prisma/client'
import { NewService } from './new.service'
import { v4 as uuid } from 'uuid'

describe('NewService tests', () => {
  const prisma = new PrismaClient()
  const newService = new NewService(prisma)

  beforeAll(async () => await prisma.$connect())
  afterAll(async () => await prisma.$disconnect())
  afterEach(async () => await prisma.new.deleteMany())

  it('Should create a new', async () => {
    const data: New = {
      id: uuid(),
      title: 'Test',
      description: 'test',
      type: 'teste',
      created_at: null,
      writer: 'teste',
    }

    const result = await newService.create(data)
    expect(data).toEqual(result)
  })

  it('Should find a new by title', async () => {
    const data: New = {
      id: '3d496809-a5db-4885-a87e-d4c477890f58',
      title: 'Test',
      description: 'test',
      type: 'teste',
      created_at: null,
      writer: 'teste',
    }

    await prisma.new.create({ data })

    const title = 'Test'
    const resultMock: New = {
      id: '3d496809-a5db-4885-a87e-d4c477890f58',
      title: 'Test',
      description: 'test',
      type: 'teste',
      created_at: null,
      writer: 'teste',
    }

    const result = await newService.findOne(title)
    expect(resultMock).toEqual(result)
  })
})
