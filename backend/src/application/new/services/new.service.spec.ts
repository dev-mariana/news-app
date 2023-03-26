import { New, PrismaClient } from '@prisma/client'
import { NewService } from './new.service'
import { dataMock, resultMock } from '../mocks/mock'

describe('NewService tests', () => {
  const prisma = new PrismaClient()
  const newService = new NewService(prisma)
  const data: New = dataMock
  const response: New = resultMock

  beforeAll(async () => await prisma.$connect())
  afterAll(async () => await prisma.$disconnect())
  afterEach(async () => await prisma.new.deleteMany())

  it('Should create a new', async () => {
    const result = await newService.create(data)
    expect(data).toEqual(result)
  })

  it('Should find a new by title', async () => {
    await prisma.new.create({ data })

    const result = await newService.findOne(data.title)
    expect(response).toEqual(result)
  })

  it('Should return all the news', async () => {
    await prisma.new.create({ data })

    const result = await newService.findAll()
    expect([response]).toEqual(result)
  })
})
