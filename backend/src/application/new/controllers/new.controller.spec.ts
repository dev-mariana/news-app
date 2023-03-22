import { NewController } from './new.controller'
import { NewService } from '../services/new.service'
import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

describe('NewController tests', () => {
  const prisma = new PrismaClient()
  const newService = new NewService(prisma)
  const newController = new NewController()

  beforeAll(async () => await prisma.$connect())
  afterAll(async () => await prisma.$disconnect())

  afterEach(async () => {
    await prisma.new.deleteMany()
    jest.resetAllMocks()
  })

  it('Should create a new if not have errors', async () => {
    const mockRequest = {
      body: {
        id: '123',
        title: 'Test New',
        description: 'This is a test new',
        type: 'test',
        created_at: new Date(),
        writer: 'Test Writer',
      },
    } as Request

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response

    await newController.createNew(mockRequest, mockResponse)

    expect(mockResponse.status).toHaveBeenCalledWith(201)
  })
})
