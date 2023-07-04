import { New } from '@prisma/client'
import { Request, Response } from 'express'

export const dataMock = {
  id: '123',
  title: 'Test',
  description: 'test',
  type: 'teste',
  created_at: null,
  writer: 'teste',
} as unknown as New

export const resultMock = {
  id: '123',
  title: 'Test',
  description: 'test',
  type: 'teste',
  created_at: null,
  writer: 'teste',
} as unknown as New

export const requestMock = {
  body: {
    id: '123',
    title: 'Test New 2',
    description: 'This is a test new',
    type: 'test',
    created_at: null,
    writer: 'Test Writer',
  },
} as unknown as Request

export const responseMock = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
  send: jest.fn(),
} as unknown as Response

export const requestMock2 = {
  body: {
    id: '123',
    description: 'This is a test new',
    type: 'test',
    created_at: null,
    writer: 'Test Writer',
  },
} as unknown as Request

export const serviceMock = {
  findOne: jest.fn().mockReturnValue(null),
  create: jest.fn(),
}

export const newData: New = {
  id: '123',
  title: 'Test New',
  description: 'This is a test new',
  type: 'test',
  created_at: null,
  writer: 'Test Writer',
}

export const requestMock3 = {
  params: {
    id: '123',
  },
} as unknown as Request
