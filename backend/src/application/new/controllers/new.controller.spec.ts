import { NewController } from './new.controller'
import { NewService } from '../services/new.service'
import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

describe('NewController tests', () => {
  const prisma = new PrismaClient()
  const newService = new NewService(prisma)
  const newController = new NewController()

  beforeEach(async () => {
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
      send: jest.fn(),
    } as unknown as Response

    await newController.createNew(mockRequest, mockResponse)
  })

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
        title: 'Test New 2',
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

  it('Should return 400 if any required field is missing', async () => {
    const mockRequest = {
      body: {
        id: '123',
        description: 'This is a test new',
        type: 'test',
        created_at: new Date(),
        writer: 'Test Writer',
      },
    } as Request

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    } as unknown as Response

    const mockService = {
      findOne: jest.fn().mockReturnValue(null),
      create: jest.fn(),
    }

    await newController.createNew(mockRequest, mockResponse)

    expect(mockService.findOne).not.toHaveBeenCalled()
    expect(mockService.create).not.toHaveBeenCalled()
    expect(mockResponse.status).toHaveBeenCalledWith(400)
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Is missing title field.',
    })
  })

  it('Should throw an error if title already exists', async () => {
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
      send: jest.fn(),
    } as unknown as Response

    await newController.createNew(mockRequest, mockResponse)

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.send).toHaveBeenCalledWith(
      'Error: The new with name Test New already exists.'
    )
  })
})
