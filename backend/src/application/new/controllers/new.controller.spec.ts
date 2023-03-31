import { NewController } from './new.controller'
import { NewService } from '../services/new.service'
import { New, PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import {
  newData,
  requestMock,
  requestMock2,
  requestMock3,
  responseMock,
  serviceMock,
} from '../mocks/mock'

describe('NewController tests', () => {
  const prisma = new PrismaClient()
  const newService = new NewService(prisma)
  const newController = new NewController()
  const data = newData

  beforeAll(async () => {
    await prisma.$connect()
    await newService.create(data)
  })

  afterAll(async () => {
    await prisma.new.deleteMany()
    await prisma.$disconnect()
  })

  it('Should create a new if not have errors', async () => {
    const mockRequest: Request = requestMock
    const mockResponse: Response = responseMock

    await newController.createNew(mockRequest, mockResponse)
    expect(mockResponse.status).toHaveBeenCalledWith(201)
  })

  it('Should return 400 if any required field is missing', async () => {
    const mockRequest: Request = requestMock2
    const mockResponse: Response = responseMock
    const mockService = serviceMock

    await newController.createNew(mockRequest, mockResponse)

    expect(mockService.findOne).not.toHaveBeenCalled()
    expect(mockService.create).not.toHaveBeenCalled()
    expect(mockResponse.status).toHaveBeenCalledWith(400)
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Is missing title field.',
    })
  })

  it('Should throw an error if title already exists', async () => {
    const mockRequest: Request = requestMock
    const mockResponse: Response = responseMock

    await newController.createNew(mockRequest, mockResponse)

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.send).toHaveBeenCalledWith(
      'Error: The new with name Test New 2 already exists.'
    )
  })

  it('Should return a list of news if not have errors', async () => {
    const mockRequest: Request = requestMock
    const mockResponse: Response = responseMock

    await newController.findAll(mockRequest, mockResponse)
    expect(mockResponse.status).toHaveBeenCalledWith(201)
  })

  it('Should return a new by id if not have errors', async () => {
    const mockRequest: Request = requestMock3
    const mockResponse: Response = responseMock

    await newController.findById(mockRequest, mockResponse)

    expect(mockResponse.status).toHaveBeenCalledWith(201)
    expect(mockResponse.json).toHaveBeenCalledWith(data)
  })
})
